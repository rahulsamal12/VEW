const fs = require('fs');

// ABOUT PAGE
let aboutFile = 'd:/VEW/frontend/app/about/page.tsx';
if (fs.existsSync(aboutFile)) {
  let content = fs.readFileSync(aboutFile, 'utf8');
  let editorialImage = `
      <div className="relative w-full aspect-[21/9] border-y border-[var(--border-color)] overflow-hidden my-12">
        <Image 
          src="/images/about-engineers.png" 
          alt="Engineering Team on site" 
          fill 
          className="object-cover object-center opacity-90" 
        />
      </div>
  `;
  if (!content.includes('about-engineers')) {
    // replace first space-y-4 div end with image
    content = content.replace(/<\/div>\s*<div className="space-y-12">/, `</div>${editorialImage}<div className="space-y-12 pt-8 border-t border-[var(--border-color)]">`);
    content = content.replace(/import { Building2/g, 'import Image from "next/image";\nimport { Building2');
  }
  
  // also make the h1 an editorial h1
  content = content.replace(/<h1 className="text-3xl sm:text-5xl font-bold text-\[var\(--text-primary\)\]">Company Overview<\/h1>/,
  '<h1 className="text-4xl sm:text-6xl font-bold text-[var(--text-primary)] tracking-tight">Company Overview</h1>');

  fs.writeFileSync(aboutFile, content, 'utf8');
}

// SERVICES PAGE
let servicesFile = 'd:/VEW/frontend/app/services/page.tsx';
if (fs.existsSync(servicesFile)) {
  let content = fs.readFileSync(servicesFile, 'utf8');
  let editorialImage = `
      <div className="relative w-full aspect-video md:aspect-[21/9] border-y border-[var(--border-color)] overflow-hidden my-12">
        <Image 
          src="/images/services-capability.png" 
          alt="Metallurgical Machinery" 
          fill 
          className="object-cover object-center opacity-90" 
        />
      </div>
  `;
  if (!content.includes('services-capability')) {
    content = content.replace(/<\/div>\s*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">/, `</div>${editorialImage}<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">`);
    content = content.replace(/import { Factory/g, 'import Image from "next/image";\nimport { Factory');
  }
  
  content = content.replace(/<h1 className="text-3xl sm:text-5xl font-bold text-\[var\(--text-primary\)\]">Industrial Capabilities<\/h1>/,
  '<h1 className="text-4xl sm:text-6xl font-bold text-[var(--text-primary)] tracking-tight">Industrial Capabilities</h1>');

  // Change cards to list items
  content = content.replace(/industrial-card p-6/g, 'py-8 border-b border-[var(--border-subtle)]');

  fs.writeFileSync(servicesFile, content, 'utf8');
}

// OUR JOURNEY
let journeyFile = 'd:/VEW/frontend/app/journey/page.tsx';
if (fs.existsSync(journeyFile)) {
  let content = fs.readFileSync(journeyFile, 'utf8');
  // Make timeline more editorial and less boxy
  content = content.replace(/industrial-card p-6 rounded-md border border-\[var\(--border-color\)\]/g, 'py-6 border-b border-[var(--border-subtle)] hover:pl-4 transition-all');
  content = content.replace(/<div className="absolute top-8 -left-[25px] w-12 h-12 rounded-full bg-\[var\(--bg-secondary\)\] border-4 border-\[var\(--bg-surface\)\] flex items-center justify-center shadow-sm">/g, 
  '<div className="absolute top-8 -left-[20px] w-10 h-10 bg-[var(--bg-secondary)] border-2 border-[var(--accent-brass)] flex items-center justify-center">');
  
  content = content.replace(/<h1 className="text-3xl sm:text-5xl font-bold text-\[var\(--text-primary\)\]">Our Journey<\/h1>/,
  '<h1 className="text-4xl sm:text-6xl font-bold text-[var(--text-primary)] tracking-tight">Our Journey</h1>');
  
  fs.writeFileSync(journeyFile, content, 'utf8');
}
