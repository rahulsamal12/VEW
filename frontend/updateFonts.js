const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = walkSync(dirFile, filelist);
    } catch (err) {
      if (err.code === 'ENOTDIR' || err.code === 'EBUSY') filelist = [...filelist, dirFile];
    }
  });
  return filelist;
};

const directories = ['d:\\VEW\\frontend\\app', 'd:\\VEW\\frontend\\components'];
const tsxFiles = [];

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = walkSync(dir);
    tsxFiles.push(...files.filter(f => f.endsWith('.tsx')));
  }
});

let updatedCount = 0;

tsxFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;

  // 1. Reduce excessive font weights
  newContent = newContent.replace(/\bfont-extrabold\b/g, 'font-bold');
  newContent = newContent.replace(/\bfont-black\b/g, 'font-bold');

  // 2. Fix hardcoded text colors causing contrast issues
  // Replace text-white with text-[var(--text-primary)] where appropriate, but skip buttons if possible
  // Actually, wait, replacing text-white blindly might break buttons or badges that have a dark background (like accent-steel) in light mode.
  // Instead, let's target the pale gray text classes which are usually the problem for body/descriptions.
  newContent = newContent.replace(/\btext-gray-100\b/g, 'text-[var(--text-secondary)]');
  newContent = newContent.replace(/\btext-gray-200\b/g, 'text-[var(--text-secondary)]');
  newContent = newContent.replace(/\btext-gray-300\b/g, 'text-[var(--text-secondary)]');
  newContent = newContent.replace(/\btext-gray-400\b/g, 'text-[var(--text-muted)]');
  
  if (newContent !== content) {
    fs.writeFileSync(file, newContent);
    updatedCount++;
    console.log(`Updated ${file}`);
  }
});

console.log(`Finished updating ${updatedCount} files.`);
