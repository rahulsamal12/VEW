const fs = require('fs'); let content = fs.readFileSync('D:/VEW/frontend/components/Footer.tsx', 'utf8');
content = content.replace(/var\(--accent-brass\)/g, '#B68A2C');
fs.writeFileSync('D:/VEW/frontend/components/Footer.tsx', content, 'utf8');
