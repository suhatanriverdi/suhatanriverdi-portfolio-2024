/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        specialCyan: "#cce4e6",
        specialCyanLight: "#adf1f7",
        primary: "#002034df",
      },
    },
  },
  plugins: [],
};
