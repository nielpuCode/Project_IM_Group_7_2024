/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#5356FF",
        mediumBlue: "#378CE7",
        brightBlue: "#67C6E3",
        lightBlue: "#DFF5FF",
      },
    },
  },
  plugins: [],
};
