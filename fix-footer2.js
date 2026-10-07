const fs = require('fs'); let content = fs.readFileSync('D:/VEW/frontend/components/Footer.tsx', 'utf8');
content = content.replace(/className=\	ext-\[#C7D0D5\] hover:text-\[var\\\(--accent-brass\\\)\\] flex/g, 'className=\	ext-[#D1D9DD] hover:text-[var(--accent-brass)] flex');
fs.writeFileSync('D:/VEW/frontend/components/Footer.tsx', content, 'utf8');
