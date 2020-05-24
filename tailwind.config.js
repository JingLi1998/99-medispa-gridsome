/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: ["src/assets/**/*.css", "src/**/*.vue", "src/**/*.js"],
    options: {
      whitelist: ["svg-inline--fa"],
      whitelistPatterns: [/svg.*/, /fa.*/, /shiki/, /fa-$/],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: "#1976D2",
        secondary: "#C79E81",
      },
      fontFamily: {
        sans: ["Barlow", "Roboto", ...defaultTheme.fontFamily.sans],
      },
      padding: {
        wide: "56.25%",
      },
    },
    maxHeight: {
      "0": "0",
      full: "100%",
    },
  },
  variants: {},
  plugins: [],
};
