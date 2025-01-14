/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#405189",
        secondary: "#3577f1",
        success: "#0ab39c",
        warning: "#f7b84b",
        danger: "#f06548",
        light: "#f3f6f9",
        dark: "#212529",
      },
    },
  },
  plugins: [],
};
