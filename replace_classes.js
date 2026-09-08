const fs = require('fs');
const path = require('path');

const directories = [
  'd:\\VEW\\frontend\\app',
  'd:\\VEW\\frontend\\components',
  'd:\\VEW\\admin-panel\\app',
  'd:\\VEW\\admin-panel\\components'
];

const replacements = {
  'text-cyan-400': 'text-[var(--accent-brass)]',
  'bg-cyan-950': 'bg-[var(--bg-secondary)]',
  'bg-slate-900': 'bg-[var(--bg-surface)]',
  'border-slate-800': 'border-[var(--border-color)]',
  'border-gray-700': 'border-[var(--border-color)]',
  'bg-gray-900': 'bg-[var(--bg-surface)]',
  'hover:bg-slate-800/40': 'hover:bg-[var(--bg-secondary)]',
  'text-slate-400': 'text-[var(--text-secondary)]',
  'text-gray-400': 'text-[var(--text-muted)]',
  'hover:text-cyan-400': 'hover:text-[var(--accent-brass)]'
};

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      for (const [oldClass, newClass] of Object.entries(replacements)) {
        // Replace globally
        const regex = new RegExp(oldClass.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
        if (regex.test(content)) {
          content = content.replace(regex, newClass);
          modified = true;
        }
      }
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

directories.forEach(processDirectory);
console.log("Done replacing old classes.");
