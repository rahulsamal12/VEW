const fs = require('fs');

const updateImage = (filePath, oldSrc, newSrcKey, importStatement) => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add import statement if missing
    if (!content.includes('import { SITE_IMAGES }')) {
      content = content.replace(/import React[^;]*;/, `$& \nimport { SITE_IMAGES } from '@/lib/images';`);
    }

    // Replace the image source
    if (content.includes(`src="${oldSrc}"`)) {
      content = content.replace(`src="${oldSrc}"`, `src={SITE_IMAGES.${newSrcKey}}`);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    } else {
      console.log(`Could not find old source ${oldSrc} in ${filePath}`);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
};

const injectNewImage = (filePath, searchRegex, newSrcKey, altText) => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes(`src={SITE_IMAGES.${newSrcKey}}`)) {
      return;
    }

    if (!content.includes('import { SITE_IMAGES }')) {
      content = content.replace(/import React[^;]*;/, `$& \nimport { SITE_IMAGES } from '@/lib/images';`);
    }
    if (!content.includes("import Image from 'next/image'") && !content.includes('import Image from "next/image"')) {
      content = content.replace(/import React[^;]*;/, `$& \nimport Image from 'next/image';`);
    }

    let imageBlock = `
      <div className="relative w-full aspect-video md:aspect-[21/9] border-y border-[var(--border-color)] overflow-hidden my-12">
        <Image 
          src={SITE_IMAGES.${newSrcKey}} 
          alt="${altText}" 
          fill 
          className="object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500" 
        />
      </div>
    `;

    let newContent = content.replace(searchRegex, `$&\n${imageBlock}`);
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Injected into ${filePath}`);
    } else {
      console.log(`Regex not matched in ${filePath}`);
    }
  }
};

updateImage('d:/VEW/frontend/app/page.tsx', '/images/hero-metallurgical-furnace.png', 'hero');
updateImage('d:/VEW/frontend/app/about/page.tsx', '/images/about-industrial-engineering.png', 'about');
updateImage('d:/VEW/frontend/app/services/page.tsx', '/images/service-furnace-operations.png', 'furnaceOperations');
updateImage('d:/VEW/frontend/app/operations/saf-furnace/page.tsx', '/images/operations-furnace-smelting.png', 'furnaceOperations');
updateImage('d:/VEW/frontend/app/operations/raw-materials/page.tsx', '/images/raw-materials-stockpile.png', 'rawMaterials');
updateImage('d:/VEW/frontend/app/operations/breaking-sorting/page.tsx', '/images/breaking-sorting-visual.png', 'metalBreaking');
updateImage('d:/VEW/frontend/app/operations/packing-dispatch/page.tsx', '/images/packing-dispatch-visual.png', 'packingDispatch');
updateImage('d:/VEW/frontend/app/innovation/page.tsx', '/images/innovation-diaphragm-jig.png', 'innovation');
updateImage('d:/VEW/frontend/app/projects/page.tsx', '/images/projects-portfolio-hub.png', 'projects');

// INJECT NEW MRP and SINTER
injectNewImage(
  'd:/VEW/frontend/app/services/mrp/page.tsx',
  /className="text-4xl sm:text-6xl font-bold text-\[var\(--text-primary\)\] tracking-tight leading-tight">Metal Recovery Plant \(MRP\) O&M<\/h1>\s*<\/div>/s,
  'mrp',
  'Metal Recovery Plant Processing'
);

injectNewImage(
  'd:/VEW/frontend/app/services/sinter-plants/page.tsx',
  /className="text-4xl sm:text-6xl font-bold text-\[var\(--text-primary\)\] tracking-tight leading-tight">Sinter Plant Manufacturing<\/h1>\s*<\/div>/s,
  'sinter',
  'Sinter Plant Manufacturing Environment'
);
