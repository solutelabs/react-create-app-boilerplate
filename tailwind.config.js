const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        // added Inter font to sans family, similarly you can add any font here to their respective family.
        // Inter font from Google Fonts is linked in public/index.html file
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
