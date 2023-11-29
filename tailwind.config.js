/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        satin: {
          "50": "#f8f8f2",
          "100": "#e9e8db",
          "200": "#d2d0b5",
          "300": "#bab68f",
          "400": "#aaa275",
          "500": "#9d8f63",
          "600": "#8a7855",
          "700": "#746249",
          "800": "#61503f",
          "900": "#514336",
          "950": "#2c231c",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
