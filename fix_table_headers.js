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
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      // 1. Table Headers to text-primary
      content = content.replace(/<thead([^>]*)className=(["'])(.*?)\2/g, (match, prefix, quote, cls) => {
        let newCls = cls.replace(/\btext-\[var\(--text-secondary\)\]\b/g, 'text-[var(--text-primary)]');
        newCls = newCls.replace(/\btext-\[var\(--text-muted\)\]\b/g, 'text-[var(--text-primary)]');
        return `<thead${prefix}className=${quote}${newCls}${quote}`;
      });

      // 2. Table Cells to text-table-body
      content = content.replace(/<td([^>]*)className=(["'])(.*?)\2/g, (match, prefix, quote, cls) => {
        let newCls = cls.replace(/\btext-\[var\(--text-primary\)\]\b/g, 'text-[var(--text-table-body)]');
        newCls = newCls.replace(/\btext-white\b/g, 'text-[var(--text-table-body)]');
        if (!newCls.includes('text-')) {
          newCls += ' text-[var(--text-table-body)]';
        }
        return `<td${prefix}className=${quote}${newCls}${quote}`;
      });

      // 3. Paragraphs and spans (body text) to text-secondary
      content = content.replace(/<(p|span|li)([^>]*)className=(["'])(.*?)\3/g, (match, tag, prefix, quote, cls) => {
        let newCls = cls;
        // Skip if it's explicitly a heading-like text or a title or badged text
        if (!cls.includes('font-bold') && !cls.includes('text-xl') && !cls.includes('bg-[var(--accent') && !cls.includes('industrial-button')) {
            newCls = newCls.replace(/\btext-\[var\(--text-primary\)\]\b/g, 'text-[var(--text-secondary)]');
        }
        return `<${tag}${prefix}className=${quote}${newCls}${quote}`;
      });

      // 4. Headings to text-primary
      content = content.replace(/<(h1|h2|h3|h4|h5)([^>]*)className=(["'])(.*?)\3/g, (match, tag, prefix, quote, cls) => {
        let newCls = cls;
        newCls = newCls.replace(/\btext-\[var\(--text-secondary\)\]\b/g, 'text-[var(--text-primary)]');
        newCls = newCls.replace(/\btext-\[var\(--text-muted\)\]\b/g, 'text-[var(--text-primary)]');
        return `<${tag}${prefix}className=${quote}${newCls}${quote}`;
      });

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        replacedCount++;
        console.log(`Updated HTML tags in ${fullPath}`);
      }
    }
  }
}

directories.forEach(processDirectory);
console.log(`Done. Total files replaced: ${replacedCount}`);
