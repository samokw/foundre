import tailwindcssAnimate from "tailwindcss-animate";
module.exports = {
  darkMode: "class", 
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./ui/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcssAnimate,
  ],
};