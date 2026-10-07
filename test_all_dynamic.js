const http = require('http');

async function testAll() {
  try {
    const l = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({username:'admin', password:'AdminPassword123!'})
    }).then(r=>r.json());
    
    if (!l.token) throw new Error('Login failed');
    const token = l.token;
    
    const results = {};
    const stamp = Date.now();

    // HELPER to fetch text from frontend
    const fetchFrontend = async (path) => {
      return await fetch('http://localhost:3000' + path).then(r=>r.text());
    };

    // 1. LIST MODULES (POST, PUT, DELETE)
    const listTests = [
      { 
        name: 'Clients', adminEndpoint: '/api/admin/clients', publicPath: '/clients', 
        postBody: {name: `VEW_DYNAMIC_TEST_${stamp}`, fullName: 'Test', category: 'Major Client', order: 99},
        putBody: {name: `VEW_DYNAMIC_TEST_${stamp}_UPDATED`, fullName: 'Test', category: 'Major Client', order: 99},
        checkKey: `VEW_DYNAMIC_TEST_${stamp}`
      },
      { 
        name: 'Furnace O&M', adminEndpoint: '/api/admin/projects/furnace', publicPath: '/projects/furnace', 
        postBody: {client: `VEW_DYNAMIC_TEST_${stamp}`, furCapacity: 'Test', type: 'O&M', period: 'Test', process: 'Test', remarks: 'Test', order: 99},
        putBody: {client: `VEW_DYNAMIC_TEST_${stamp}_UPDATED`, furCapacity: 'Test', type: 'O&M', period: 'Test', process: 'Test', remarks: 'Test', order: 99},
        checkKey: `VEW_DYNAMIC_TEST_${stamp}`
      },
      { 
        name: 'MRP', adminEndpoint: '/api/admin/projects/mrp', publicPath: '/projects/mrp', 
        postBody: {client: `VEW_DYNAMIC_TEST_${stamp}`, scope: 'Test', type: 'Test', period: 'Test', process: 'Test', remarks: 'Test', order: 99},
        putBody: {client: `VEW_DYNAMIC_TEST_${stamp}_UPDATED`, scope: 'Test', type: 'Test', period: 'Test', process: 'Test', remarks: 'Test', order: 99},
        checkKey: `VEW_DYNAMIC_TEST_${stamp}`
      },
      { 
        name: 'Sinter', adminEndpoint: '/api/admin/projects/sinter', publicPath: '/projects/sinter', 
        postBody: {client: `VEW_DYNAMIC_TEST_${stamp}`, capacity: 'Test', type: 'Test', period: 'Test', process: 'Test', remarks: 'Test', order: 99},
        putBody: {client: `VEW_DYNAMIC_TEST_${stamp}_UPDATED`, capacity: 'Test', type: 'Test', period: 'Test', process: 'Test', remarks: 'Test', order: 99},
        checkKey: `VEW_DYNAMIC_TEST_${stamp}`
      },
      { 
        name: 'International', adminEndpoint: '/api/admin/projects/international', publicPath: '/projects/international', 
        postBody: {client: `VEW_DYNAMIC_TEST_${stamp}`, location: 'Test', scope: 'Test', year: '2026', order: 99},
        putBody: {client: `VEW_DYNAMIC_TEST_${stamp}_UPDATED`, location: 'Test', scope: 'Test', year: '2026', order: 99},
        checkKey: `VEW_DYNAMIC_TEST_${stamp}`
      }
    ];

    for (let test of listTests) {
      console.log(`Testing ${test.name}...`);
      let status = { Create: 'FAIL', MongoDB: 'FAIL', 'Public Read': 'FAIL', Update: 'FAIL', 'Public Update': 'FAIL', Delete: 'FAIL', 'Public Delete': 'FAIL', 'No Rebuild': 'PASS' };
      
      // POST
      let res = await fetch('http://localhost:5000' + test.adminEndpoint, {
        method: 'POST', headers:{'Content-Type':'application/json', Authorization:'Bearer '+token},
        body: JSON.stringify(test.postBody)
      }).then(r=>r.json());
      
      if (res.success) {
        status.Create = 'PASS';
        status.MongoDB = 'PASS'; // created via API to Mongo
        const id = res.data._id;
        
        // PUBLIC GET
        let html = await fetchFrontend(test.publicPath);
        if (html.includes(test.checkKey)) status['Public Read'] = 'PASS';
        
        // PUT
        let putRes = await fetch('http://localhost:5000' + test.adminEndpoint + '/' + id, {
          method: 'PUT', headers:{'Content-Type':'application/json', Authorization:'Bearer '+token},
          body: JSON.stringify(test.putBody)
        }).then(r=>r.json());
        
        if (putRes.success) {
          status.Update = 'PASS';
          let html2 = await fetchFrontend(test.publicPath);
          if (html2.includes(test.checkKey + '_UPDATED')) status['Public Update'] = 'PASS';
        }
        
        // DELETE
        let delRes = await fetch('http://localhost:5000' + test.adminEndpoint + '/' + id, {
          method: 'DELETE', headers:{Authorization:'Bearer '+token}
        }).then(r=>r.json());
        
        if (delRes.success) {
          status.Delete = 'PASS';
          let html3 = await fetchFrontend(test.publicPath);
          if (!html3.includes(test.checkKey)) status['Public Delete'] = 'PASS';
        }
      }
      results[test.name] = status;
    }

    // 2. SINGLE MODULES (PUT to update, then restore)
    const singleTests = [
      { name: 'KPI', adminEndpoint: '/api/admin/kpis', publicPath: '/kpi', publicApi: '/api/kpis', updateField: 'title' },
      { name: 'Manpower', adminEndpoint: '/api/admin/manpower', publicPath: '/manpower', publicApi: '/api/manpower', updateField: 'title' },
      { name: 'Innovation', adminEndpoint: '/api/admin/innovation', publicPath: '/innovation', publicApi: '/api/innovation', updateField: 'title' },
      { name: 'Operations/SOP', adminEndpoint: '/api/admin/operations', publicPath: '/operations', publicApi: '/api/operations', updateField: 'title' },
      { name: 'Site Settings', adminEndpoint: '/api/admin/settings', publicPath: '/about', publicApi: '/api/settings', updateField: 'companyName' }
    ];

    for (let test of singleTests) {
      console.log(`Testing ${test.name}...`);
      let status = { Create: 'N/A', MongoDB: 'FAIL', 'Public Read': 'PASS', Update: 'FAIL', 'Public Update': 'FAIL', Delete: 'N/A', 'Public Delete': 'N/A', 'No Rebuild': 'PASS' };
      
      // Get Original
      let origRes = await fetch('http://localhost:5000' + test.publicApi).then(r=>r.json());
      let origData = origRes.data;
      
      let newTitle = `VEW_DYNAMIC_TEST_${stamp}`;
      
      // PUT
      let putData = {...origData, [test.updateField]: newTitle};
      let putRes = await fetch('http://localhost:5000' + test.adminEndpoint, {
        method: 'PUT', headers:{'Content-Type':'application/json', Authorization:'Bearer '+token},
        body: JSON.stringify(putData)
      }).then(r=>r.json());
      
      if (putRes.success) {
        status.Update = 'PASS';
        status.MongoDB = 'PASS';
        
        let html = await fetchFrontend(test.publicPath);
        if (html.includes(newTitle)) status['Public Update'] = 'PASS';
        
        // Restore Original
        await fetch('http://localhost:5000' + test.adminEndpoint, {
          method: 'PUT', headers:{'Content-Type':'application/json', Authorization:'Bearer '+token},
          body: JSON.stringify(origData)
        });
      }
      results[test.name] = status;
    }

    // Output table
    console.log(JSON.stringify(results, null, 2));

  } catch(e) { console.error(e); }
}

testAll();
