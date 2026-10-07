const fs = require('fs');
const path = require('path');

const globalsPath = 'D:/VEW/frontend/app/globals.css';
let globalsCSS = fs.readFileSync(globalsPath, 'utf8');

const typographyCSS = `
@layer base {
  /* Typography System */
  html, body {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif !important;
  }
  
  h1 {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif !important;
    font-weight: 700 !important;
    letter-spacing: -0.035em !important;
    line-height: 1.12 !important;
    font-size: clamp(34px, 5vw, 56px) !important;
  }
  @media (min-width: 1440px) { h1 { font-size: 60px !important; } }
  
  h2 {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif !important;
    font-weight: 700 !important;
    letter-spacing: -0.025em !important;
    line-height: 1.15 !important;
    font-size: clamp(26px, 4vw, 40px) !important;
  }
  
  h3 {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif !important;
    font-weight: 600 !important;
    font-size: clamp(20px, 3vw, 26px) !important;
    line-height: 1.25 !important;
    letter-spacing: -0.015em !important;
  }
  
  p, li, span, div, a {
    font-family: inherit;
  }
  
  p {
    font-weight: 400;
    font-size: clamp(16px, 1.5vw, 18px);
    line-height: 1.65;
    letter-spacing: 0;
  }
}

@layer components {
  /* Navigation */
  nav a {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif !important;
    font-size: 16px !important;
    font-weight: 500 !important;
    letter-spacing: -0.005em !important;
  }
  
  /* Buttons */
  button, .industrial-button-primary, .industrial-button-secondary {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    letter-spacing: 0.01em !important;
  }
  
  /* KPI Typography */
  .vew-kpi-number {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif !important;
    font-size: clamp(30px, 4vw, 42px) !important;
    font-weight: 700 !important;
    letter-spacing: -0.03em !important;
    line-height: 1 !important;
  }
  
  /* Small Labels / Eyebrows */
  .vew-label {
    font-size: 12px !important;
    font-weight: 600 !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
  }
  
  /* Footer Typography */
  footer h4 {
    font-size: 16px !important;
    font-weight: 700 !important;
    letter-spacing: -0.01em !important;
  }
  footer p, footer span, footer a {
    font-size: 15px !important;
    line-height: 1.6 !important;
  }
  footer a {
    font-weight: 500 !important;
  }
}
`;

if (!globalsCSS.includes('/* Typography System */')) {
  globalsCSS += '\n' + typographyCSS;
  fs.writeFileSync(globalsPath, globalsCSS, 'utf8');
  console.log('Typography CSS injected.');
} else {
  console.log('Already injected.');
}
