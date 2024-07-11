/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A73E8",
        secondary: "#EEF5FF",
        fontPrimary: "#1A202C",
        customBlue: "#94A3B833",
        footer: "#282828",
      },
    },
  },
  plugins: [],
};
