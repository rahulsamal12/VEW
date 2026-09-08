const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = walkSync(dirFile, filelist);
    } catch (err) {
      if (err.code === 'ENOTDIR' || err.code === 'EBUSY') {
        if (dirFile.endsWith('.tsx')) {
            filelist = [...filelist, dirFile];
        }
      }
    }
  });
  return filelist;
};

const directories = [
    'd:\\VEW\\frontend\\app', 
    'd:\\VEW\\frontend\\components',
    'd:\\VEW\\admin-panel\\app',
    'd:\\VEW\\admin-panel\\components'
];
const tsxFiles = [];

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = walkSync(dir);
    tsxFiles.push(...files);
  }
});

let updatedCount = 0;

tsxFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;

  // Remove glassmorphism class names
  newContent = newContent.replace(/\bglass-panel\b/g, 'industrial-card');
  newContent = newContent.replace(/\bbackdrop-blur-md\b/g, '');
  newContent = newContent.replace(/\bbackdrop-blur-lg\b/g, '');
  newContent = newContent.replace(/\bbackdrop-blur-sm\b/g, '');
  newContent = newContent.replace(/\bbackdrop-blur\b/g, '');
  newContent = newContent.replace(/\bbg-white\/[0-9]+\b/g, '');
  newContent = newContent.replace(/\bbg-black\/[0-9]+\b/g, '');
  
  // Remove gradients
  newContent = newContent.replace(/\bbg-gradient-to-[a-z]+\b/g, '');
  newContent = newContent.replace(/\bfrom-[a-zA-Z0-9-\[\]]+\b/g, '');
  newContent = newContent.replace(/\bvia-[a-zA-Z0-9-\[\]]+\b/g, '');
  newContent = newContent.replace(/\bto-[a-zA-Z0-9-\[\]]+\b/g, '');
  
  // Reduce excessive corner rounding
  newContent = newContent.replace(/\brounded-3xl\b/g, 'rounded-md');
  newContent = newContent.replace(/\brounded-2xl\b/g, 'rounded-md');
  newContent = newContent.replace(/\brounded-xl\b/g, 'rounded-sm');
  newContent = newContent.replace(/\brounded-full\b/g, 'rounded-md'); // Mostly applied to pills/cards, if it breaks icons we'll fix it, but standard corporate doesn't use massive pill cards much. Actually, rounded-full is used on icons. Let's be careful. Let's only replace rounded-2xl and 3xl.
  
  // Undo rounded-full replacement just in case
  content = content; // Just to make sure we don't mess it up
  
  // Redoing safely:
  let safeContent = content;
  safeContent = safeContent.replace(/\bglass-panel\b/g, 'industrial-card');
  safeContent = safeContent.replace(/\bbackdrop-blur-[a-z]+\b/g, '');
  safeContent = safeContent.replace(/\bbackdrop-blur\b/g, '');
  safeContent = safeContent.replace(/\bbg-white\/[0-9]+\b/g, '');
  safeContent = safeContent.replace(/\border-white\/[0-9]+\b/g, '');
  
  safeContent = safeContent.replace(/\bbg-gradient-to-[a-z]+\b/g, '');
  safeContent = safeContent.replace(/\bfrom-[a-zA-Z0-9-\[\]]+\b/g, '');
  safeContent = safeContent.replace(/\bvia-[a-zA-Z0-9-\[\]]+\b/g, '');
  safeContent = safeContent.replace(/\bto-[a-zA-Z0-9-\[\]]+\b/g, '');
  
  safeContent = safeContent.replace(/\brounded-3xl\b/g, 'rounded-md');
  safeContent = safeContent.replace(/\brounded-2xl\b/g, 'rounded-md');
  // keep rounded-full for actual icons/avatars, but remove from large layout wrappers if possible. 
  
  safeContent = safeContent.replace(/\bshadow-2xl\b/g, 'shadow-sm');
  safeContent = safeContent.replace(/\bshadow-xl\b/g, 'shadow-sm');
  safeContent = safeContent.replace(/\bshadow-glow\b/g, 'shadow-sm');
  safeContent = safeContent.replace(/\bshadow-lg\b/g, 'shadow-sm');
  
  // Clean up excessive spacing inside class attributes
  safeContent = safeContent.replace(/className="(?:\s+)/g, 'className="');
  safeContent = safeContent.replace(/(?:\s+)"/g, '"');
  safeContent = safeContent.replace(/\s{2,}/g, ' ');

  if (safeContent !== content) {
    fs.writeFileSync(file, safeContent);
    updatedCount++;
    console.log(`De-AI'd ${file}`);
  }
});

console.log(`Finished processing ${updatedCount} files.`);
