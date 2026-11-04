/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      colors: {
        cream: "#F8F5ED",
        forest: "#244632",
        orange: "#F47735",
        ink: "#20251F",
        butter: "#FFD36A",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        hand: ["Kalam", "cursive"],
      },
      boxShadow: { soft: "0 12px 35px rgba(35,54,40,.08)" },
    },
  },
  plugins: [],
};
