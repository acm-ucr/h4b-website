/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inika: ["var(--font-inika)"],
        shrikhand: ["var(--font-shrikhand)"],
        omc: ["var(--font-omc)"],
        gurajada: ["var(--font-gurajada)"],
      },
      colors: {
        biscuits: {
          peach: "#FFEBE0",
          orange: "#FFC679",
          "gray-100": "#9BB0C1",
          "gray-200": "#2C4755",
          "red-100": "#DC8686",
          "red-200": "#8C4E4E",
          "purple-100": "#C3B4E5",
          "purple-200": "#58437C",
          "green-100": "#E5FCC8",
          "green-200": "#234C32",
          pink: "#FFDDE7",
          "brown-100": "#BE9C6A",
          "brown-200": "#7B3F00",
          yellow: "#FFF0CA",
          pinkish: "#F5CCC5",
          textColor: "#A36361",
        },
      },
      backgroundImage: {
        blobs1: "url('/assets/blobs1.svg')",
      },
    },
  },
  plugins: [],
};
