/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // all your colors ...
        "custom-gray": "333333",
        "green": {
          50: "#f3faf3",
          100: "#e3f5e3",
          200: "#c8eac9",
          300: "#9dd89f",
          400: "#6bbd6e",
          500: "#4caf50",
          600: "#358438",
          700: "#2d6830",
          800: "#275429",
          900: "#224525",
          950: "#0e2510"
        },
        // ...
      },
    },
  },
  plugins: [],
};
