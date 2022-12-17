/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: {
          50: "hsl(35, 77%, 62%)",
          100: "hsl(5, 85%, 63%)",
        },
        neutral: {
          50: "hsl(36, 100%, 99%)",
          100: "hsl(233, 8%, 79%)",
          200: "hsl(236, 13%, 42%)",
          300: "hsl(240, 100%, 5%)",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
