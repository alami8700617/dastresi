/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        mbl: "340px",
        des: "1000px",
      },
      boxShadow:{
        soft:"0 0 20px gray",
      },
    },
  },
  plugins: [],
};

