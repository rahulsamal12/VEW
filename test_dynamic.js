const testDynamic = async () => {
  try {
    console.log('1. Logging in...');
    const l = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({username:'admin', password:'AdminPassword123!'})
    }).then(r=>r.json());
    
    if (!l.token) throw new Error('Login failed');
    const token = l.token;

    console.log('2. Creating temporary record (DYNAMIC_TEST_2026)...');
    let res = await fetch('http://localhost:5000/api/admin/clients', {
      method: 'POST',
      headers:{'Content-Type':'application/json', Authorization:'Bearer '+token},
      body: JSON.stringify({name: 'DYNAMIC_TEST_2026', fullName: 'Dynamic Test 2026 Ltd', category: 'Major Client', order: 99})
    }).then(r=>r.json());
    
    if (!res.success) throw new Error('Create failed');
    const clientId = res.data._id;
    
    console.log('3. Fetching Public Website (http://localhost:3000/clients)...');
    let html = await fetch('http://localhost:3000/clients').then(r=>r.text());
    if (html.includes('DYNAMIC_TEST_2026')) {
      console.log('CREATE TEST: PASS - Record found on public website without rebuild.');
    } else {
      console.log('CREATE TEST: FAIL - Record not found on public website.');
      throw new Error('Create not reflected on frontend');
    }

    console.log('4. Updating record (DYNAMIC_TEST_2026_UPDATED)...');
    res = await fetch('http://localhost:5000/api/admin/clients/'+clientId, {
      method: 'PUT',
      headers:{'Content-Type':'application/json', Authorization:'Bearer '+token},
      body: JSON.stringify({name: 'DYNAMIC_TEST_2026_UPDATED', fullName: 'Dynamic Test 2026 Ltd', category: 'Major Client', order: 99})
    }).then(r=>r.json());

    if (!res.success) throw new Error('Update failed');

    console.log('5. Fetching Public Website (http://localhost:3000/clients)...');
    html = await fetch('http://localhost:3000/clients').then(r=>r.text());
    if (html.includes('DYNAMIC_TEST_2026_UPDATED')) {
      console.log('UPDATE TEST: PASS - Updated record found on public website.');
    } else {
      console.log('UPDATE TEST: FAIL - Updated record not found on public website.');
      throw new Error('Update not reflected on frontend');
    }

    console.log('6. Deleting temporary record...');
    res = await fetch('http://localhost:5000/api/admin/clients/'+clientId, {
      method: 'DELETE',
      headers:{Authorization:'Bearer '+token}
    }).then(r=>r.json());
    
    if (!res.success) throw new Error('Delete failed');

    console.log('7. Fetching Public Website (http://localhost:3000/clients)...');
    html = await fetch('http://localhost:3000/clients').then(r=>r.text());
    if (!html.includes('DYNAMIC_TEST_2026')) {
      console.log('DELETE TEST: PASS - Record removed from public website.');
    } else {
      console.log('DELETE TEST: FAIL - Record still on public website.');
      throw new Error('Delete not reflected on frontend');
    }

  } catch (error) {
    console.error('TEST FAILED:', error.message);
  }
};

testDynamic();
