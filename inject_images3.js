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
          className="object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-500" 
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

// SAF FURNACE
injectImage(
  'd:/VEW/frontend/app/operations/saf-furnace/page.tsx', 
  /className="text-4xl sm:text-6xl font-bold text-\[var\(--text-primary\)\] tracking-tight leading-tight">Smelting — Submerged Arc Furnace \(SAF\) Operation<\/h1>\s*<\/div>/s, 
  'operations-furnace-smelting.png', 
  'SAF Furnace Smelting Operation'
);

// BREAKING SORTING
injectImage(
  'd:/VEW/frontend/app/operations/breaking-sorting/page.tsx', 
  /className="text-4xl sm:text-6xl font-bold text-\[var\(--text-primary\)\] tracking-tight leading-tight">\s*Metal Breaking, Sizing & Sorting\s*<\/h1>\s*<\/div>/s, 
  'breaking-sorting-visual.png', 
  'Metal Breaking and Sorting'
);

// PACKING DISPATCH
injectImage(
  'd:/VEW/frontend/app/operations/packing-dispatch/page.tsx', 
  /className="text-4xl sm:text-6xl font-bold text-\[var\(--text-primary\)\] tracking-tight leading-tight">\s*Packing & Dispatch\s*<\/h1>\s*<\/div>/s, 
  'packing-dispatch-visual.png', 
  'Packing and Dispatch Operations'
);

