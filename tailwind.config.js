module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.tsx",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.ts",
  ],
  darkMode: false,
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
    },
  },
  variants: {
    extend: {
      borderWidth: ["last"],
    },
  },
  plugins: [],
};
