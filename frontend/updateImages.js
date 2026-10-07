const fs = require('fs');
const path = require('path');
const filesToUpdate = [
  'app/services/turnkey-projects/page.tsx',
  'app/services/sinter-plants/page.tsx',
  'app/services/page.tsx',
  'app/services/mrp/page.tsx',
  'app/services/fabrication-erection/page.tsx',
  'app/services/beneficiary-units/page.tsx',
  'app/page.tsx',
  'app/operations/saf-furnace/page.tsx',
  'app/projects/page.tsx',
  'app/operations/raw-materials/page.tsx',
  'app/operations/packing-dispatch/page.tsx',
  'app/operations/breaking-sorting/page.tsx',
  'app/innovation/page.tsx',
  'app/about/page.tsx'
];
for (let file of filesToUpdate) {
  let fullPath = path.join('d:/VEW/frontend', file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    content = content.replace(/import\s+\{\s*SITE_IMAGES\s*\}\s+from\s+['"]@\/lib\/images['"];?/g, "import { getSiteImages } from '@/lib/api';");
    if (content.includes('getSiteImages') && !content.includes('const SITE_IMAGES = await getSiteImages();')) {
      content = content.replace(/(export\s+default\s+(?:async\s+)?function\s+\w+\s*\([^)]*\)\s*\{)/, "$1\n  const SITE_IMAGES = await getSiteImages();");
      content = content.replace(/export\s+default\s+function\s+(\w+)/, "export default async function $1");
      fs.writeFileSync(fullPath, content);
    }
  }
}
