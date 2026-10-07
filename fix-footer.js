const fs = require('fs');
let content = fs.readFileSync('D:/VEW/frontend/components/Footer.tsx', 'utf8');

content = content.replace(/border-\[var\(--text-secondary\)\]/g, 'border-[rgba(255,255,255,0.15)]');
content = content.replace(/text-\[#FFFFFF\]/g, 'text-[#F3F4F2]');
content = content.replace(/text-\[var\(--text-secondary\)\]/g, 'text-[#D1D9DD]');

// Replace links (making sure to target the class string)
content = content.replace(/className=\"([^\"]*)text-\[#D1D9DD\]([^\"]*hover:text-\[var\(--accent-brass\)\])/g, 'className="$1text-[#E5E9EA]$2');

// Muted and copyright
content = content.replace(/text-\[var\(--text-muted\)\]/g, 'text-[#C7D0D5]');

// Specific icons
content = content.replace(/text-\[#C7D0D5\]"/g, 'text-[#D1D9DD]"');

fs.writeFileSync('D:/VEW/frontend/components/Footer.tsx', content, 'utf8');
console.log('Footer updated');
