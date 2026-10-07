const fs = require('fs'); let content = fs.readFileSync('D:/VEW/frontend/components/Footer.tsx', 'utf8');
content = content.replace(/hover:text-\[var\\\(--accent-brass\\\)\\]/g, 'hover:text-[#B68A2C]');
content = content.replace(/text-\[var\\\(--accent-brass\\\)\\]/g, 'text-[#B68A2C]');
fs.writeFileSync('D:/VEW/frontend/components/Footer.tsx', content, 'utf8');
