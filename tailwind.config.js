/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        xs: "0 -10px 0 0 #393839, 0 10px 0 0 #393839",
      },
    },
  },
  plugins: [],
};
