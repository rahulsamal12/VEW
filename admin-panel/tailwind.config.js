/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        admin: {
          bg: 'var(--admin-bg)',
          sidebar: 'var(--admin-sidebar)',
          surface: 'var(--admin-surface)',
          card: 'var(--admin-card)',
          border: 'var(--admin-border)',
          steel: 'var(--admin-steel)',
          brass: 'var(--admin-brass)',
          text: {
            primary: 'var(--admin-text-primary)',
            secondary: 'var(--admin-text-secondary)',
            muted: 'var(--admin-text-muted)'
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
