/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/**/*.{html,js,jsx}"],
  theme: {
    extend: {

      colors: {
      
          primary: "#0371b7",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
