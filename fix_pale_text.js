const fs = require('fs');
const path = require('path');

const directories = [
  'd:\\VEW\\frontend\\app',
  'd:\\VEW\\frontend\\components',
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
          classNameStr = classNameStr.replace(/\btext-gray-100\b/g, 'text-[var(--text-secondary)]');
          classNameStr = classNameStr.replace(/\btext-gray-200\b/g, 'text-[var(--text-secondary)]');
          classNameStr = classNameStr.replace(/\btext-gray-300\b/g, 'text-[var(--text-secondary)]');
          
          classNameStr = classNameStr.replace(/\btext-slate-100\b/g, 'text-[var(--text-secondary)]');
          classNameStr = classNameStr.replace(/\btext-slate-200\b/g, 'text-[var(--text-secondary)]');
          classNameStr = classNameStr.replace(/\btext-slate-300\b/g, 'text-[var(--text-secondary)]');
          classNameStr = classNameStr.replace(/\btext-slate-400\b/g, 'text-[var(--text-secondary)]');
          
          classNameStr = classNameStr.replace(/\btext-blue-100\b/g, 'text-[var(--text-secondary)]');
          classNameStr = classNameStr.replace(/\btext-blue-200\b/g, 'text-[var(--text-secondary)]');

          classNameStr = classNameStr.replace(/\btext-\[#fff\]\b/g, 'text-[var(--text-primary)]');
          classNameStr = classNameStr.replace(/\btext-\[#ffffff\]\b/g, 'text-[var(--text-primary)]');
          
          // Remove problematic opacity utilities that fade text into the background
          classNameStr = classNameStr.replace(/\bopacity-\d+\b/g, '');
          classNameStr = classNameStr.replace(/\btext-opacity-\d+\b/g, '');
          classNameStr = classNameStr.replace(/\bg-[a-zA-Z0-9-\[\]\(\)\-\_]+\/\d+\b/g, (m) => m.split('/')[0]); // e.g. text-white/80 -> text-white (but already handled text-white)
          classNameStr = classNameStr.replace(/\btext-[a-zA-Z0-9-\[\]\(\)\-\_]+\/\d+\b/g, (m) => m.split('/')[0]); 

          // normalize spaces
          classNameStr = classNameStr.replace(/\s+/g, ' ').trim();
        }

        if (classNameStr !== originalStr) {
            replacedCount++;
        }

        if (p1) {
            return `className=${quote}${classNameStr}${quote}`;
        } else {
            return `className={\`${classNameStr}\`}`;
        }
      });
      
      // Inline style color: white
      content = content.replace(/style=\{\{\s*color:\s*['"]white['"]\s*\}\}/g, 'className="text-[var(--text-primary)]"');
      content = content.replace(/style=\{\{\s*color:\s*['"]#fff['"]\s*\}\}/g, 'className="text-[var(--text-primary)]"');
      content = content.replace(/style=\{\{\s*color:\s*['"]#ffffff['"]\s*\}\}/g, 'className="text-[var(--text-primary)]"');


      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

directories.forEach(processDirectory);
console.log(`Done. Total replacements made: ${replacedCount}`);
