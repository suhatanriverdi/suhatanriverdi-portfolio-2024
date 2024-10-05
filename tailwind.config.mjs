/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        specialCyan: "#cce4e6",
        specialCyanLight: "#adf1f7",
        primary: "#195358",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-down": "fadeDown 0.5s ease-out",
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: 0, transform: "translateY(-50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      }),
    },
  },
  plugins: [],
};
