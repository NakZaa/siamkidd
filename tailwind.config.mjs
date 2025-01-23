/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#fbfbfe",
        brand: "#3C643D",
        primary: {
          DEFAULT: "#4F834D",
          50: "#0a100a",
          100: "#132013",
          200: "#264027",
          300: "#39603a",
          400: "#4d804d",
          500: "#609f61",
          600: "#80b380",
          700: "#9fc6a0",
          800: "#bfd9c0",
          900: "#dfecdf",
          950: "#eff5ef",
        },
        secondary: "#648852",
        accent: "#F1DF8D",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
