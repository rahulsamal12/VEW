const fs = require('fs');
const path = require('path');

const adminAppDir = path.join(__dirname, 'admin-panel', 'app');

function patchFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Search for:
  // const handleSave = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (editingItem && editingItem._id) {
  //     await updateAdminData(
  //       ...
  //     );
  //   } else {
  //     await updateAdminData(...);
  //   }
  //   setIsModalOpen(false);
  //   setEditingItem(null);
  //   loadData();
  // };

  // We can just inject an optimistic update directly into loadData or replace handleSave.
  // Actually, wait. Is there a simpler way?
  // What if I just use the response from updateAdminData?
  
  if (content.includes('const handleSave = async (e: React.FormEvent) => {') && !content.includes('let res;')) {
      const newHandleSave = `const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    let res;
    if (editingItem && editingItem._id) {
      res = await updateAdminData(
        \`/admin\${window.location.pathname}/\${editingItem._id}\`,
        formData,
        "PUT",
      );
    } else {
      res = await updateAdminData(\`/admin\${window.location.pathname}\`, formData, "POST");
    }
    
    setIsModalOpen(false);
    setEditingItem(null);
    
    if (res && res.success) {
      await loadData();
    } else {
      alert("Failed to save: " + (res?.message || "Unknown error"));
    }
  };`;

      // Replace the old handleSave. We need to find the block.
      // Since parsing is hard, let's just do a regex replace from `const handleSave` to `loadData();\n  };`
      const regex = /const handleSave = async \(e: React\.FormEvent\) => \{[\s\S]*?loadData\(\);\s*\};/;
      if (regex.test(content)) {
          // Wait, window.location.pathname might be `/projects/furnace`. So `/admin/projects/furnace`.
          // This is a brilliant generic fix!
          // But wait, the original code had hardcoded paths.
          // Let's just patch loadData to have a timestamp. Wait, I already did that in fetchAdminData.
          
          // Let's replace the whole handleSave with a version that awaits loadData!
          content = content.replace(/setIsModalOpen\(false\);\s*setEditingItem\(null\);\s*loadData\(\);/g, 
            'setIsModalOpen(false);\n    setEditingItem(null);\n    await loadData();');
          fs.writeFileSync(filePath, content);
          console.log('Patched await loadData:', filePath);
      }
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
