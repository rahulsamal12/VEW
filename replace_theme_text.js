const fs = require('fs');
const path = require('path');

const directories = [
  'd:\\VEW\\frontend\\app',
  'd:\\VEW\\frontend\\components',
  'd:\\VEW\\admin-panel\\app',
  'd:\\VEW\\admin-panel\\components'
];

let replacedCount = 0;

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      // Extract classNames to parse intelligently
      content = content.replace(/className=(["'])(.*?)\1|className=\{`([^`]+)`\}/g, (match, quote, p1, p2) => {
        let classNameStr = p1 || p2 || '';
        let originalStr = classNameStr;

        // Skip buttons or intentionally colored backgrounds for text-white
        const hasDarkBg = classNameStr.includes('bg-[var(--accent-steel)]') || 
                          classNameStr.includes('bg-[var(--admin-accent)]') || 
                          classNameStr.includes('industrial-button-primary');

        if (!hasDarkBg) {
          classNameStr = classNameStr.replace(/\btext-white\b/g, 'text-[var(--text-primary)]');
        }

        classNameStr = classNameStr.replace(/\btext-gray-900\b/g, 'text-[var(--text-primary)]');
        classNameStr = classNameStr.replace(/\btext-gray-800\b/g, 'text-[var(--text-primary)]');
        classNameStr = classNameStr.replace(/\btext-black\b/g, 'text-[var(--text-primary)]');
        classNameStr = classNameStr.replace(/\btext-gray-700\b/g, 'text-[var(--text-secondary)]');
        classNameStr = classNameStr.replace(/\btext-gray-600\b/g, 'text-[var(--text-secondary)]');
        classNameStr = classNameStr.replace(/\btext-gray-500\b/g, 'text-[var(--text-muted)]');
        classNameStr = classNameStr.replace(/\btext-gray-400\b/g, 'text-[var(--text-muted)]');
        classNameStr = classNameStr.replace(/\btext-gray-300\b/g, 'text-[var(--text-secondary)]');

        if (classNameStr !== originalStr) {
            replacedCount++;
        }

        if (p1) {
            return `className=${quote}${classNameStr}${quote}`;
        } else {
            return `className={\`${classNameStr}\`}`;
        }
      });

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

directories.forEach(processDirectory);
console.log(`Done. Total replacements made: ${replacedCount}`);
