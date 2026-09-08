const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to a common laptop resolution
  await page.setViewport({ width: 1280, height: 800 });
  
  console.log('Navigating to http://localhost:3000/operations/casting-cooling');
  await page.goto('http://localhost:3000/operations/casting-cooling', { waitUntil: 'networkidle0' });
  
  const results = await page.evaluate(() => {
    const scrollWidth = document.documentElement.scrollWidth;
    const clientWidth = document.documentElement.clientWidth;
    const innerWidth = window.innerWidth;
    
    // Find all elements that exceed innerWidth
    const overflowingElements = [];
    document.querySelectorAll('*').forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Ignore hidden or 0-width elements
      if (rect.width > 0 && rect.height > 0 && rect.right > innerWidth) {
        // Build a readable path or string
        let identifier = el.tagName.toLowerCase();
        if (el.id) identifier += '#' + el.id;
        if (el.className && typeof el.className === 'string') identifier += '.' + el.className.split(' ').join('.');
        
        overflowingElements.push({
          element: identifier,
          right: rect.right,
          width: rect.width,
          scrollWidth: el.scrollWidth,
          clientWidth: el.clientWidth,
          text: el.textContent ? el.textContent.substring(0, 30).trim() : ''
        });
      }
    });

    // Find the contact button
    const buttons = Array.from(document.querySelectorAll('a'));
    const contactBtn = buttons.find(b => b.textContent && b.textContent.includes('CONTACT US'));
    let contactRight = null;
    if (contactBtn) {
      contactRight = contactBtn.getBoundingClientRect().right;
    }

    return {
      scrollWidth,
      clientWidth,
      innerWidth,
      contactRight,
      overflowingElements
    };
  });
  
  console.log('--- METRICS ---');
  console.log('document.documentElement.scrollWidth:', results.scrollWidth);
  console.log('document.documentElement.clientWidth:', results.clientWidth);
  console.log('window.innerWidth:', results.innerWidth);
  console.log('Contact Us Button right:', results.contactRight);
  console.log('--- OVERFLOWING ELEMENTS ---');
  results.overflowingElements.forEach(el => {
    console.log(`\nELEMENT: ${el.element}`);
    console.log(`RIGHT: ${el.right} (Exceeds innerWidth by ${el.right - results.innerWidth}px)`);
    console.log(`WIDTH: ${el.width} | TEXT: "${el.text}"`);
  });
  
  await browser.close();
})();
