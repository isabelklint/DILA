/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this path according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#003B5C',
      },
    },
  },
  plugins: [],
};
