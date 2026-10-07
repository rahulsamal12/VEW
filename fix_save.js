const fs = require('fs');
const path = require('path');

const adminAppDir = path.join(__dirname, 'admin-panel', 'app', 'projects');

const modules = ['furnace', 'mrp', 'sinter', 'international'];

for (const mod of modules) {
  const filePath = path.join(adminAppDir, mod, 'page.tsx');
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace handleSave
  const handleSaveRegex = /const handleSave = async \(e: React\.FormEvent\) => \{[\s\S]*?await loadData\(\);\s*\};/;
  
  const newHandleSave = `const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    let res;
    if (editingItem && editingItem._id) {
      res = await updateAdminData(
        \`/admin/projects/${mod}/\${editingItem._id}\`,
        formData,
        "PUT"
      );
    } else {
      res = await updateAdminData("/admin/projects/${mod}", formData, "POST");
    }

    if (res && res.success) {
      setIsModalOpen(false);
      setEditingItem(null);
      // Optimistic update
      if (editingItem && editingItem._id) {
         setItems(prev => prev.map(item => item._id === editingItem._id ? res.data : item));
      } else {
         setItems(prev => [res.data, ...prev]);
      }
      await loadData();
    } else {
      alert(res?.message || "Failed to save project");
    }
  };`;

  content = content.replace(handleSaveRegex, newHandleSave);
  fs.writeFileSync(filePath, content);
  console.log('Patched handleSave in', filePath);
}
