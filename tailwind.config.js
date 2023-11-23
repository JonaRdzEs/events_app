/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // all your colors ...
        "my-purple-color": {
          200: "#A262E1",
          333: "#7059DE",
          400: "#3f3cbb",
        },
        // ...
      },
    },
  },
  plugins: [],
};
