const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      avenirregular: ["Conv_AvenirNextLTPro-Regular"],
      avenirbold: ["Conv_AvenirNextLTPro-Bold"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontSize: {
      30: " 1.875rem", // 30px,
      25: " 1.563rem", // 25px,
      20: "1.25rem", // 20px,
      10: "0.625rem", // 10px,
      base: "1rem",
      xs: "0.75rem",
      sm: "0.875rem",
      lg: "1.125rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
    extend: {
      colors: {
        primary: {
          1: "#40b7d4",
        },
        gray: {
          10: "#F2F2F2",
          20: "#838383",
          30: "#666666",
          ...defaultTheme.colors.gray,
        },
        black: "#1E1E1E",
        white: "#ffffff",
        red: {
          50: "#E87557",
          ...defaultTheme.colors.red,
        },
      },
    },
    objectPosition: {},
    order: {},
    boxShadow: {},
    zIndex: { 50: "50", 0: "0", 10: "10" },
    cursor: { pointer: "pointer", default: "default" },
    listStyleType: {
      none: "none",
    },
    backgroundPosition: {},
    backgroundSize: {},
    letterSpacing: {},
  },
  backgroundColor: ["responsive", "hover", "focus"],
};
