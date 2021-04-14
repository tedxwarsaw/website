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
    extend: {
      colors: {
        customLightGrey: "#f6f6f6",
        customDarkGrey: "#333333",
      },
    },
    fontFamily: {
      sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
    },
  },
  variants: {
    extend: {
      borderWidth: ["last"],
      scale: ["active"],
    },
  },
  plugins: [],
};
