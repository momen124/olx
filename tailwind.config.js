/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Scan all React and TypeScript files
    './public/index.html',          // Include your public HTML file
    './src/**/*.{vue}'              // Include Vue components (if you're using Vue)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
