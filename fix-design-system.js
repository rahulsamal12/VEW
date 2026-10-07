const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      filelist = walkSync(filePath, filelist);
    } else if (filePath.endsWith('.tsx')) {
      filelist.push(filePath);
    }
  });
  return filelist;
};

const files = walkSync('D:\\\\VEW\\\\frontend\\\\app');
let modifiedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // H1 updates - regex matching generic H1
  content = content.replace(/className="text-4xl sm:text-5xl lg:text-6xl font-bold text-\[var\(--text-primary\)\] leading-tight tracking-tight"/g, 'className="text-[34px] sm:text-[40px] md:text-[52px] font-bold text-[var(--text-primary)] leading-[1.1]"');
  content = content.replace(/className="text-\[36px\] md:text-\[48px\] lg:text-\[56px\] font-bold text-\[var\(--text-primary\)\] leading-tight tracking-tight"/g, 'className="text-[34px] sm:text-[40px] md:text-[52px] font-bold text-[var(--text-primary)] leading-[1.1]"');
  content = content.replace(/className="text-\[32px\] md:text-\[40px\] font-bold text-\[var\(--text-primary\)\] leading-tight"/g, 'className="text-[34px] sm:text-[40px] md:text-[52px] font-bold text-[var(--text-primary)] leading-[1.1]"');

  // H2 updates for headers
  content = content.replace(/<h2 className="text-2xl font-bold/g, '<h2 className="text-[34px] md:text-[42px] font-bold');
  content = content.replace(/<h2 className="text-\[24px\] font-bold/g, '<h2 className="text-[34px] md:text-[42px] font-bold');
  content = content.replace(/<h2 className="text-\[28px\] md:text-\[32px\] font-bold/g, '<h2 className="text-[34px] md:text-[42px] font-bold');

  // H3 updates for cards
  content = content.replace(/<h3 className="text-base font-bold/g, '<h3 className="text-[22px] font-bold');
  content = content.replace(/<h2 className="text-\[22px\] font-bold/g, '<h3 className="text-[22px] font-bold');
  content = content.replace(/<\/h2>(\s*<p className="text-\[14px\] text-\[var\(--text-secondary\)\])/g, '</h3>$1');
  content = content.replace(/<\/h2>(\s*<p className="text-xs text-\[var\(--text-secondary\)\])/g, '</h3>$1');

  // Rounded corners
  content = content.replace(/rounded-\[2px\]/g, 'rounded-[8px]');
  content = content.replace(/rounded-md/g, 'rounded-[8px]');
  content = content.replace(/rounded-sm/g, 'rounded-[4px]');

  // Text sizes
  content = content.replace(/text-sm text-\[var\(--text-secondary\)\] leading-relaxed/g, 'text-[16px] md:text-[18px] text-[var(--text-secondary)] font-normal leading-[1.75]');
  content = content.replace(/text-xs text-\[var\(--text-secondary\)\] leading-relaxed/g, 'text-[14px] md:text-[15px] text-[var(--text-secondary)] font-medium leading-[1.6]');
  content = content.replace(/text-\[16px\] md:text-\[18px\] text-\[var\(--text-secondary\)\] font-medium/g, 'text-[16px] md:text-[18px] text-[var(--text-secondary)] font-normal');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    modifiedCount++;
    console.log('Updated:', file);
  }
});

console.log('Total files modified:', modifiedCount);
