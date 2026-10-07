const fs = require('fs');
const path = require('path');

const adminAppDir = path.join(__dirname, 'admin-panel', 'app');

function patchFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // We want to replace:
  // if (res && res.success) {
  //   loadData();
  // }
  // with:
  // if (res && res.success) {
  //   setItems(prev => prev.filter(item => item._id !== id));
  //   await loadData();
  // }
  
  // Note: the `id` variable is what handleDelete accepts.
  // We can just use regex to replace it.
  
  const regex = /if\s*\(\s*res\s*&&\s*res\.success\s*\)\s*\{\s*loadData\(\);\s*\}/g;
  content = content.replace(regex, `if (res && res.success) {
        setItems(prev => prev.filter(item => item._id !== id));
        await loadData();
      }`);

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Patched delete flow:', filePath);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('page.tsx')) {
      patchFile(fullPath);
    }
  }
}

walkDir(adminAppDir);
