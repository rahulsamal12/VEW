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
          elevated: 'var(--admin-elevated)',
          border: 'var(--admin-border)',
          accent: 'var(--admin-accent)',
          brass: 'var(--admin-brass)',
          stripe: 'var(--admin-stripe)',
          text: {
            primary: 'var(--admin-text-primary)',
            secondary: 'var(--admin-text-secondary)'
          }
        }
      }
    },
  },
  plugins: [],
}
