const fs = require('fs');
const path = require('path');

const moreFiles = [
  'app/operations/packing-dispatch/page.tsx',
  'app/operations/material-prep/page.tsx',
  'app/operations/casting-cooling/page.tsx',
  'app/operations/breaking-sorting/page.tsx'
];

const basePath = 'd:\\VEW\\frontend';

moreFiles.forEach(file => {
  const filePath = path.join(basePath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Regex to match the span badge
    const regex = /<span className="text-xs uppercase tracking-widest text-\[var\(--accent-brass\)\] font-semibold">Operational SOP<\/span>\s*/g;
    
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
