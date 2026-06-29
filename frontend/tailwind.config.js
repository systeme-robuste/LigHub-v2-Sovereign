/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nexus: {
          gold: '#C5A059',
          dark: '#0A0A0A',
          glass: 'rgba(255, 255, 255, 0.05)',
        }
      }
    },
  },
  plugins: [],
}