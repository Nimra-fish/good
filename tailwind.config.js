/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

// Define the rotateY plugin
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.-rotate-y-180': {
      transform: 'rotateY(-180deg)',
    },
  });
});

module.exports = {
  content: ["./src/*.{html,js}"], // Ensure you include the paths where Tailwind should look for class usage
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '20px', // Use `DEFAULT` instead of `default`
        md: '50px',
      },
    },
  },
  plugins: [rotateY], // Register the custom plugin
};
