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
  let safeContent = content;

  // Replace divide-slate-800/60 with divide-[var(--border-color)]
  safeContent = safeContent.replace(/\bdivide-slate-[0-9]+\/[0-9]+\b/g, 'divide-[var(--border-color)]');
  safeContent = safeContent.replace(/\bdivide-[a-z]+-[0-9]+\b/g, 'divide-[var(--border-color)]');

  // Replace neon text colors
  safeContent = safeContent.replace(/\btext-emerald-400\b/g, 'text-[var(--text-primary)]');
  safeContent = safeContent.replace(/\btext-amber-300\b/g, 'text-[var(--text-primary)]');
  safeContent = safeContent.replace(/\btext-blue-400\b/g, 'text-[var(--text-primary)]');
  safeContent = safeContent.replace(/\btext-indigo-400\b/g, 'text-[var(--text-primary)]');

  // Replace weird transparent background/border colors (AI style)
  safeContent = safeContent.replace(/\bbg-amber-[0-9]+\/[0-9]+\b/g, 'bg-[var(--bg-secondary)]');
  safeContent = safeContent.replace(/\bborder-amber-[0-9]+\/[0-9]+\b/g, 'border-[var(--border-color)]');
  safeContent = safeContent.replace(/\bborder-\[var\(--border-color\)\]\/80\b/g, 'border-[var(--border-color)]');

  // Any remaining rounded-xl -> rounded-sm
  safeContent = safeContent.replace(/\brounded-xl\b/g, 'rounded-sm');
  safeContent = safeContent.replace(/\brounded-lg\b/g, 'rounded-sm');

  // Fix custom text variables that shouldn't be hardcoded to weird hexes
  safeContent = safeContent.replace(/\btext-\[var\(--text-table-body\)\]\b/g, 'text-[var(--text-secondary)]');
  
  // Keep string substitutions safe
  if (safeContent !== content) {
    fs.writeFileSync(file, safeContent);
    updatedCount++;
    console.log(`De-AI colors processed: ${file}`);
  }
});

console.log(`Finished processing ${updatedCount} files for colors.`);
