const fs = require('fs');
const path = require('path');

const files = [
  'app/manpower/page.tsx',
  'app/operations/page.tsx',
  'app/kpi/page.tsx',
  'app/innovation/page.tsx',
  'app/clients/page.tsx',
  'app/operations/saf-furnace/page.tsx',
  'app/operations/raw-materials/page.tsx',
  'app/operations/packing-dispatch/page.tsx',
  'app/operations/material-prep/page.tsx',
  'app/operations/casting-cooling/page.tsx',
  'app/operations/breaking-sorting/page.tsx'
];

const basePath = 'd:\\VEW\\frontend';

files.forEach(file => {
  const filePath = path.join(basePath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Regex to match the inline-flex badge wrapper entirely
    const regex = /<div className="inline-flex items-center gap-2 px-[^>]+>\s*<[a-zA-Z]+ className="[^"]+" \/>[^<]+\s*<\/div>\s*/g;
    
    const newContent = content.replace(regex, '');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Successfully removed badge from ${file}`);
    } else {
      console.log(`No badge matched in ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});
