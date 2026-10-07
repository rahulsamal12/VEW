const fs = require('fs');
const path = require('path');

const adminAppDir = path.join(__dirname, 'admin-panel', 'app');

function patchFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // We want to patch handleSave.
  // We'll replace the entire handleSave function with one that awaits loadData() and checks response.
  
  // Find where handleSave begins and where it ends.
  // This is a bit tricky with regex, so we'll do a simpler replacement.
  
  // Look for:
  // await updateAdminData(
  //   `/admin/.../${editingItem._id}`,
  //   formData,
  //   "PUT",
  // );
  // } else {
  //   await updateAdminData("/admin/.../", formData, "POST");
  // }
  // setIsModalOpen(false);
  // setEditingItem(null);
  // loadData();
  
  // Instead of complex parsing, I'll just change `loadData();` to `await loadData();`
  // Actually, let's just make it optimistic if possible, or simply add a cache buster to the API itself.
  
  // Wait, I already added a cache buster to fetchAdminData.
  // What if the issue is that updateAdminData doesn't wait for loadData?
  // Let's replace `loadData();` with `await loadData();` just to be safe.
  if (content.includes('loadData();') && content.includes('const handleSave = async')) {
      content = content.replace(/setIsModalOpen\(false\);\s*setEditingItem\(null\);\s*loadData\(\);/g, 
        'setIsModalOpen(false);\n    setEditingItem(null);\n    await loadData();');
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
