const fs = require('fs');
const globalsPath = 'D:/VEW/frontend/app/globals.css';
let content = fs.readFileSync(globalsPath, 'utf8');

const typographyCSS = \

@layer base {
  /* Typography System */
  html, body {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif !important;
  }
  
  h1 {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif !important;
    font-weight: 700 !important;
    letter-spacing: -0.035em !important;
    line-height: 1.1 !important;
    font-size: clamp(34px, 4vw, 56px) !important;
  }
  @media (min-width: 1440px) { h1 { font-size: 60px !important; } }
  
  h2 {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif !important;
    font-weight: 700 !important;
    letter-spacing: -0.025em !important;
    line-height: 1.15 !important;
    font-size: clamp(26px, 3.5vw, 40px) !important;
  }
  
  h3 {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif !important;
    font-weight: 650 !important;
    font-size: clamp(20px, 2.5vw, 26px) !important;
    line-height: 1.25 !important;
    letter-spacing: -0.015em !important;
  }
  
  p, li, span, div, a {
    font-family: inherit;
  }
  
  p {
    font-weight: 400;
    font-size: clamp(16px, 1.2vw, 18px);
    line-height: 1.65;
    letter-spacing: 0;
  }
  
  /* Tables */
  th {
    font-size: 13px !important;
    font-weight: 700 !important;
    letter-spacing: 0.04em !important;
  }
  td {
    font-size: 15px !important;
    font-weight: 400 !important;
  }
}

@layer components {
  /* Navigation */
  .nav-link, nav a {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif !important;
    font-size: 16px !important;
    font-weight: 500 !important;
    letter-spacing: -0.005em !important;
  }
  .nav-link.active, nav a.active {
    font-weight: 600 !important;
  }
  
  /* Logo */
  .company-logo {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif !important;
    font-weight: 700 !important;
    line-height: 1.05 !important;
  }
  
  /* Buttons */
  button, .industrial-button-primary, .industrial-button-secondary, .btn {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif !important;
    font-size: 14px !important;
    font-weight: 700 !important;
    letter-spacing: 0.01em !important;
  }
  
  /* KPI Typography */
  .kpi-number, [class*='text-4xl'], [class*='text-5xl'], [class*='text-6xl'] {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif !important;
    font-size: clamp(30px, 3.5vw, 42px) !important;
    font-weight: 700 !important;
    letter-spacing: -0.03em !important;
    line-height: 1 !important;
  }
  
  /* Small Labels / Eyebrows */
  .eyebrow, [class*='tracking-wider'], [class*='tracking-widest'] {
    font-size: 12px !important;
    font-weight: 700 !important;
    letter-spacing: 0.08em !important;
    text-transform: uppercase !important;
  }
  
  /* Footer Typography */
  footer h4 {
    font-size: 16px !important;
    font-weight: 700 !important;
  }
  footer p, footer span, footer a {
    font-size: 15px !important;
    line-height: 1.6 !important;
  }
  footer a {
    font-weight: 500 !important;
  }
}
\;

if (!content.includes('/* Typography System */')) {
  content = content + '\n' + typographyCSS;
  fs.writeFileSync(globalsPath, content, 'utf8');
  console.log('Typography CSS injected.');
} else {
  console.log('Already injected.');
}

