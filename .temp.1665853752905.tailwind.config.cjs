/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif:  "Eczar, serif"; 
        sans: "Public Sans,Roboto,sans-serif",
      },
    },
  },
  plugins: [],
};
