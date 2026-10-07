const fs = require('fs');
const path = require('path');

const adminAppDir = path.join(__dirname, 'admin-panel', 'app');

function patchFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Replace key={idx} with key={row._id || idx}
  content = content.replace(/key=\{idx\}/g, 'key={row._id || idx}');

  // 2. We will safely change the end of handleSave to check success if possible.
  // Actually, just making loadData awaited might be enough.
  content = content.replace(/setIsModalOpen\(false\);\s*setEditingItem\(null\);\s*loadData\(\);/g, 
    'setIsModalOpen(false);\n    setEditingItem(null);\n    await loadData();');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Patched:', filePath);
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
