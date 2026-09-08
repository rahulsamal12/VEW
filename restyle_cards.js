const fs = require('fs');
const path = require('path');

const walkDir = (dir, callback) => {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
};

const dirs = [
  'd:/VEW/frontend/app/projects/furnace',
  'd:/VEW/frontend/app/projects/mrp',
  'd:/VEW/frontend/app/projects/sinter',
  'd:/VEW/frontend/app/projects/international',
  'd:/VEW/frontend/app/about',
  'd:/VEW/frontend/app/journey',
  'd:/VEW/frontend/app/innovation',
  'd:/VEW/frontend/app/kpi',
  'd:/VEW/frontend/app/manpower',
];

dirs.forEach(d => {
  if (fs.existsSync(d)) {
    walkDir(d, (filePath) => {
      if (filePath.endsWith('page.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        let newContent = content.replace(/industrial-card[^"]*/g, (match) => {
          if (match.includes('p-6') || match.includes('p-8')) {
            return 'py-8 border-t border-[var(--border-subtle)] space-y-4';
          }
          return 'py-6';
        });

        newContent = newContent.replace(/p-6 bg-\[var\(--bg-surface\)\] border border-\[var\(--border-color\)\]/g, 'py-8 border-b border-[var(--border-color)]');
        newContent = newContent.replace(/p-8 rounded-md bg-\[var\(--bg-surface\)\] border border-\[var\(--border-color\)\]/g, 'py-12 border-b border-[var(--border-color)]');
        newContent = newContent.replace(/p-4 bg-\[var\(--bg-surface\)\] border border-\[var\(--border-color\)\]/g, 'py-4 border-b border-[var(--border-subtle)]');
        
        // Remove inner card borders for tables
        newContent = newContent.replace(/className="table-responsive custom-scrollbar"/g, 'className="table-responsive custom-scrollbar my-8"');

        if (content !== newContent) {
          fs.writeFileSync(filePath, newContent, 'utf8');
          console.log(`Updated: ${filePath}`);
        }
      }
    });
  }
});
