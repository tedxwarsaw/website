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
        customGrey: "#d8d8d8",
        customDarkGrey: "#333333",
        customRed: "#E62B1E",
        customTransparent: "rgba(0,0,0,0)",
      },
    },
    fontFamily: {
      sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
    },
    screens: {
      md: "640px",
      xl: "1280px",
      lg: "1024px",
      "2xl": "1536px",
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "last"],
      borderColor: ["hover", "last"],
      scale: ["active"],
    },
  },
  plugins: []
};
