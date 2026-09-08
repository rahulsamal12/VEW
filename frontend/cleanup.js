const fs = require('fs');
const path = require('path');

const replacements = [
  {
    file: 'app/manpower/page.tsx',
    search: 'PDF 1 Page 10 Source of Truth',
    replace: 'Manpower Distribution'
  },
  {
    file: 'app/operations/page.tsx',
    search: 'Operational SOP — PDF Source of Truth',
    replace: 'Operational SOP'
  },
  {
    file: 'app/kpi/page.tsx',
    search: 'Technical KPI Specs — PDF 2 Pages 9-10',
    replace: 'Technical KPI Specs'
  },
  {
    file: 'app/innovation/page.tsx',
    search: 'Technical Case Study — PDF 1 Page 9',
    replace: 'Technical Case Study'
  },
  {
    file: 'app/clients/page.tsx',
    search: 'Verified Client Roster — PDF 1 Page 4',
    replace: 'Verified Client Roster'
  },
  {
    file: 'app/operations/saf-furnace/page.tsx',
    search: 'Operational SOP — Step 3',
    replace: 'Operational SOP'
  },
  {
    file: 'app/operations/raw-materials/page.tsx',
    search: 'Operational SOP — Page 2',
    replace: 'Operational SOP'
  },
  {
    file: 'app/operations/packing-dispatch/page.tsx',
    search: 'Operational SOP — Step 6',
    replace: 'Operational SOP'
  },
  {
    file: 'app/operations/material-prep/page.tsx',
    search: 'Operational SOP — Step 2',
    replace: 'Operational SOP'
  },
  {
    file: 'app/operations/casting-cooling/page.tsx',
    search: 'Operational SOP — Step 4',
    replace: 'Operational SOP'
  },
  {
    file: 'app/operations/casting-cooling/page.tsx',
    search: '"The source recommends slag granulation because it will be easier',
    replace: '"Slag granulation is highly recommended because it is easier'
  },
  {
    file: 'app/operations/breaking-sorting/page.tsx',
    search: 'Operational SOP — Step 5',
    replace: 'Operational SOP'
  },
  {
    file: 'components/Footer.tsx',
    search: '<span>Authoritative Source: PDF Credentials & Operational SOP</span>',
    replace: '<span>ISO Certified Operations</span>'
  }
];

const basePath = 'd:\\VEW\\frontend';

replacements.forEach(({ file, search, replace }) => {
  const filePath = path.join(basePath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(search)) {
      content = content.replace(search, replace);
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${file}`);
    } else {
      console.log(`Search string not found in ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});
