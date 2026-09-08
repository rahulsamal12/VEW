const fs = require('fs');
const path = require('path');

const srcDir = 'd:/VEW/frontend/public/images';
const artifactDir = 'C:/Users/samal/.gemini/antigravity-ide/brain/e4486258-e598-4fbb-9bcc-b9578c7bbe6c';

const imageMap = {
  'hero-metallurgical-furnace.png': 'vew-hero-furnace.png',
  'about-engineers.png': 'vew-about-engineering.png',
  'service-furnace-operations.png': 'vew-furnace-operations.png',
  'mrp_material_recovery_1788860481607.png': 'vew-mrp-material-recovery.png', // from artifact dir
  'sinter_plant_1788860498956.png': 'vew-sinter-plant.png', // from artifact dir
  'raw-materials-stockpile.png': 'vew-raw-materials.png',
  'breaking-sorting-visual.png': 'vew-metal-breaking.png',
  'packing-dispatch-visual.png': 'vew-packing-dispatch.png',
  'innovation-diaphragm-jig.png': 'vew-diaphragm-jig.png',
  'projects-portfolio-hub.png': 'vew-projects.png'
};

// Copy artifacts first
const mrpSrc = path.join(artifactDir, 'mrp_material_recovery_1788860481607.png');
const sinterSrc = path.join(artifactDir, 'sinter_plant_1788860498956.png');

if (fs.existsSync(mrpSrc)) {
  fs.copyFileSync(mrpSrc, path.join(srcDir, 'mrp_material_recovery_1788860481607.png'));
}
if (fs.existsSync(sinterSrc)) {
  fs.copyFileSync(sinterSrc, path.join(srcDir, 'sinter_plant_1788860498956.png'));
}

// Rename and clean up
const files = fs.readdirSync(srcDir);
files.forEach(file => {
  if (imageMap[file]) {
    fs.renameSync(path.join(srcDir, file), path.join(srcDir, imageMap[file]));
    console.log(`Renamed ${file} to ${imageMap[file]}`);
  } else if (!Object.values(imageMap).includes(file) && file !== 'vew-hero-furnace.png') {
    // Delete unused files
    fs.unlinkSync(path.join(srcDir, file));
    console.log(`Deleted unused file: ${file}`);
  }
});
