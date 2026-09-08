const fs = require('fs');
const path = require('path');

const moreReplacements = [
  {
    file: 'app/operations/packing-dispatch/page.tsx',
    search: 'Source Statement:',
    replace: 'Quality Control Statement:'
  },
  {
    file: 'app/operations/saf-furnace/page.tsx',
    search: 'Source Observation:',
    replace: 'Operational Observation:'
  }
];

const basePath = 'd:\\VEW\\frontend';

moreReplacements.forEach(({ file, search, replace }) => {
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
