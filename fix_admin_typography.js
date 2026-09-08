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
  let safeContent = content;

  // Replace font-black and font-extrabold with font-bold
  safeContent = safeContent.replace(/\bfont-black\b/g, 'font-bold');
  safeContent = safeContent.replace(/\bfont-extrabold\b/g, 'font-bold');
  
  // Replace neon text colors in case I missed any in admin-panel
  safeContent = safeContent.replace(/\btext-red-400\b/g, 'text-rose-500');

  // Keep string substitutions safe
  if (safeContent !== content) {
    fs.writeFileSync(file, safeContent);
    updatedCount++;
    console.log(`Typography fixed: ${file}`);
  }
});

console.log(`Finished processing ${updatedCount} files for typography in admin-panel.`);
