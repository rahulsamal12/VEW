const fs = require('fs');

function injectImage(filePath, searchRegex, imageSrc, altText) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if image already exists
    if (content.includes(imageSrc)) {
      console.log(`Image ${imageSrc} already in ${filePath}`);
      return;
    }
    
    // Ensure Image component is imported
    if (!content.includes("import Image from 'next/image'") && !content.includes('import Image from "next/image"')) {
      content = content.replace(/import React[^;]*;/, `$& \nimport Image from 'next/image';`);
    }

    let imageBlock = `
      <div className="relative w-full aspect-video md:aspect-[21/9] border-y border-[var(--border-color)] overflow-hidden my-12">
        <Image 
          src="/images/${imageSrc}" 
          alt="${altText}" 
          fill 
          className="object-cover object-center opacity-90" 
        />
      </div>
    `;

    // Replace based on regex
    let newContent = content.replace(searchRegex, `$&\n${imageBlock}`);
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Successfully updated ${filePath}`);
    } else {
      console.log(`Regex not matched in ${filePath}`);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
}

// ABOUT
injectImage(
  'd:/VEW/frontend/app/about/page.tsx', 
  /className="text-4xl sm:text-6xl font-bold text-\[var\(--text-primary\)\] tracking-tight">Company Overview<\/h1>\s*<\/div>/, 
  'about-industrial-engineering.png', 
  'Industrial Engineering Operations'
);

// SERVICES
injectImage(
  'd:/VEW/frontend/app/services/page.tsx', 
  /className="text-4xl sm:text-6xl font-bold text-\[var\(--text-primary\)\] tracking-tight">Industrial Capabilities<\/h1>\s*<\/div>/, 
  'service-furnace-operations.png', 
  'Furnace Operations Capabilities'
);

// SAF FURNACE
injectImage(
  'd:/VEW/frontend/app/operations/saf-furnace/page.tsx', 
  /<h1 className="text-3xl sm:text-5xl font-bold text-\[var\(--text-primary\)\]">Smelting — Submerged Arc Furnace \(SAF\) Operation<\/h1>\s*<p[^>]*>.*?<\/p>\s*<\/div>/s, 
  'operations-furnace-smelting.png', 
  'SAF Furnace Smelting Operation'
);

// RAW MATERIALS
injectImage(
  'd:/VEW/frontend/app/operations/raw-materials/page.tsx', 
  /<h1 className="text-3xl sm:text-5xl font-bold text-\[var\(--text-primary\)\]">\s*Raw Material Requirements & Storage Shed\s*<\/h1>\s*<p[^>]*>.*?<\/p>\s*<\/div>/s, 
  'raw-materials-stockpile.png', 
  'Raw Materials Stockpile'
);

// BREAKING SORTING
injectImage(
  'd:/VEW/frontend/app/operations/breaking-sorting/page.tsx', 
  /<h1 className="text-3xl sm:text-5xl font-bold text-\[var\(--text-primary\)\]">\s*Metal Breaking, Sizing & Sorting\s*<\/h1>\s*<p[^>]*>.*?<\/p>\s*<\/div>/s, 
  'breaking-sorting-visual.png', 
  'Metal Breaking and Sorting'
);

// PACKING DISPATCH
injectImage(
  'd:/VEW/frontend/app/operations/packing-dispatch/page.tsx', 
  /<h1 className="text-3xl sm:text-5xl font-bold text-\[var\(--text-primary\)\]">\s*Packing & Dispatch\s*<\/h1>\s*<p[^>]*>.*?<\/p>\s*<\/div>/s, 
  'packing-dispatch-visual.png', 
  'Packing and Dispatch Operations'
);

// INNOVATION
injectImage(
  'd:/VEW/frontend/app/innovation/page.tsx', 
  /<h1 className="text-3xl sm:text-5xl font-bold text-\[var\(--text-primary\)\]">\s*Process Innovation\s*<\/h1>\s*<p[^>]*>.*?<\/p>\s*<\/div>/s, 
  'innovation-diaphragm-jig.png', 
  'Diaphragm Jig Innovation'
);

// PROJECTS
injectImage(
  'd:/VEW/frontend/app/projects/page.tsx', 
  /<h1 className="text-3xl sm:text-5xl font-bold text-\[var\(--text-primary\)\]">\s*Project Portfolio\s*<\/h1>\s*<p[^>]*>.*?<\/p>\s*<\/div>/s, 
  'projects-portfolio-hub.png', 
  'Projects Portfolio Hub'
);

