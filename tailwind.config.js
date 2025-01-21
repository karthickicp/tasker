/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#0f172a",
        },
      },
    },
    fontFamily: {
      body: ["Inter"],
      sans: ["Inter"],
    },
  },
};
