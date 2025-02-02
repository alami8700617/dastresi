/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        mbl: "340px",
        des: "1000px",
      },
    },
  },
  plugins: [],
};

