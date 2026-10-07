const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('page.tsx')) {
      results.push(file);
    }
  });
  return results;
}
const files = walk('D:/VEW/frontend/app');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;
  
  const regex = /className=`?\"?max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 (py-\d+|pt-\d+)( md:py-\d+| md:pt-\d+)? (.*?)\"`?/g;
  
  content = content.replace(regex, (match, p1, p2, rest) => {
    // If it already has our correct padding, ignore
    if (p1.includes('pt-[110px]')) return match;
    
    modified = true;
    return 'className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[110px] pb-16 md:pt-[140px] md:pb-20 ' + rest + '"';
  });
  
  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated padding in ' + file);
  }
});
