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

      // Force headings to primary
      content = content.replace(/<(h[1-6])([^>]*)className=(["'])(.*?)\3/g, (match, tag, prefix, quote, cls) => {
        let newCls = cls.replace(/\btext-\[var\(--text-secondary\)\]\b/g, '')
                        .replace(/\btext-\[var\(--text-muted\)\]\b/g, '')
                        .replace(/\btext-\[var\(--text-body\)\]\b/g, '')
                        .replace(/\s+/g, ' ').trim();
        if (!newCls.includes('text-[var(--text-primary)]')) {
            newCls += ' text-[var(--text-primary)]';
        }
        return `<${tag}${prefix}className=${quote}${newCls}${quote}`;
      });

      // Force thead to primary
      content = content.replace(/<thead([^>]*)className=(["'])(.*?)\2/g, (match, prefix, quote, cls) => {
        let newCls = cls.replace(/\btext-\[var\(--text-secondary\)\]\b/g, '')
                        .replace(/\btext-\[var\(--text-muted\)\]\b/g, '')
                        .replace(/\btext-\[var\(--text-body\)\]\b/g, '')
                        .replace(/\s+/g, ' ').trim();
        if (!newCls.includes('text-[var(--text-primary)]')) {
            newCls += ' text-[var(--text-primary)]';
        }
        return `<thead${prefix}className=${quote}${newCls}${quote}`;
      });

      // Force th to primary
      content = content.replace(/<th([^>]*)className=(["'])(.*?)\2/g, (match, prefix, quote, cls) => {
        let newCls = cls.replace(/\btext-\[var\(--text-secondary\)\]\b/g, '')
                        .replace(/\btext-\[var\(--text-muted\)\]\b/g, '')
                        .replace(/\btext-\[var\(--text-body\)\]\b/g, '')
                        .replace(/\s+/g, ' ').trim();
        // Don't add primary if it's already there
        if (!newCls.includes('text-[var(--text-primary)]')) {
           // wait, we only want to add it if it was setting a text color before, but let's just add it
           newCls += ' text-[var(--text-primary)]';
        }
        return `<th${prefix}className=${quote}${newCls}${quote}`;
      });
      
      // Remove text-gray/slate/blue completely if still any left
      content = content.replace(/\btext-(slate|gray|blue|cyan)-[1-4]00\b/g, 'text-[var(--text-secondary)]');
      
      // Opacity
      content = content.replace(/\bopacity-(30|40|50|60|70|80|90)\b/g, '');
      content = content.replace(/\btext-opacity-(30|40|50|60|70|80|90)\b/g, '');

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        replacedCount++;
      }
    }
  }
}

directories.forEach(processDirectory);
console.log(`Done. Total files replaced: ${replacedCount}`);
