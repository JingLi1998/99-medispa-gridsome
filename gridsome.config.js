// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

module.exports = {
  siteName: "99 Medispa",
  titleTemplate: "%s | 99 Medispa",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [
        // ...global plugins
      ],
    },
  },
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        purgeConfig: {
          content: ["src/assets/**/*.css", "src/**/*.vue", "src/**/*.js"],
          whitelist: [
            "svg-inline--fa",
            "svg-inline--fa",
            "v-select",
            "v--single",
            "vs--unsearchable",
            "vs__dropdown-toggle",
            "vs__selected-options",
            "vs__search",
            "vs__actions",
            "vs__clear",
            "vs__open-indicator",
            "vs__spinner",
            "vs1__listbox",
            "vs__dropdown-menu",
          ],
          whitelistPatterns: [/svg.*/, /fa.*/, /shiki/, /fa-$/],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/backgrounds/*.md",
        typeName: "Backgrounds",
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/offers/*.md",
        typeName: "Offers",
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/slideshow/*.md",
        typeName: "Slideshow",
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/treatments/*.md",
        typeName: "Treatments",
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/prices/*.md",
        typeName: "Prices",
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
      },
    },
  ],

  // chainWebpack: (config) => {
  //   if (process.env.NODE_ENV === "production") {
  //     config
  //       .plugin("BundleAnalyzerPlugin")
  //       .use(BundleAnalyzerPlugin, [{ analyzerMode: "static" }]);
  //   }
  // },
};
