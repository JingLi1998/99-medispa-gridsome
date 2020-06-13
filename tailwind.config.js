/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#1976D2",
        secondary: "#C79E81",
        grey: "#bababa",
      },
      fontFamily: {
        sans: ["Barlow", "Roboto", ...defaultTheme.fontFamily.sans],
        fancy: ["Times New Roman"],
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
      },
      opacity: {
        "10": ".1",
        "20": ".2",
        "30": ".3",
        "40": ".4",
        "50": ".5",
        "60": ".6",
        "70": ".7",
        "80": ".8",
        "90": ".9",
        "100": "1",
      },
      height: {
        "800": "800px",
      },
      padding: {
        wide: "56.25%",
        "7/10": "70%",
        full: "100%",
      },
      zIndex: {
        "-10": -10,
        "60": 60,
        "70": 70,
        "80": 80,
        "90": 90,
        "100": 100,
      },
      minHeight: {
        "24": "6rem",
      },
    },
    maxHeight: {
      "0": "0",
      full: "100%",
    },
  },
  variants: {
    // opacity: ["responsive", "hover", "focus", "disabled"],
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".v-select .vs__dropdown-toggle": {
          borderColor: "#e2e8f0",
          paddingTop: "0.25rem",
          paddingBottom: "0.25rem",
          paddingLeft: "0.75rem",
        },
        ".v-select .vs__selected": {
          padding: 0,
          margin: 0,
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
