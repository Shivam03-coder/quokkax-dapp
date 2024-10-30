/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--font-Inter)",
        poppins: "var(--font-Poppins)",
        orbitron: "var(--font-Orbitron)",
      },
      colors: {
        primary: "hsl(var(--color-primary))",
        secondary: "hsl(var(--color-secondary))",
        tertiary: "hsl(var(--color-tertiary))",
        palebdanger: "hsl(var(--color-palebdanger))",
        light: "hsl(var(--color-light))",
        paleblue: "hsl(var(--color-paleblue))",
        paledark: "hsl(var(--color-paledark))",
        darkred: "hsl(var(--color-darkred))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
