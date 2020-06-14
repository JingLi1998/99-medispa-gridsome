// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

module.exports = {
  siteName: "99 Medispa",
  siteUrl: "https://99medispa.com.au",
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
          whitelist: ["svg-inline--fa"],
          whitelistPatterns: [/svg.*/, /fa.*/, /v-.*/, /vs.*/, /shiki/, /fa-$/],
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
    "@gridsome/plugin-sitemap",
    "gridsome-plugin-robots-txt",
  ],

  // chainWebpack: (config) => {
  //   if (process.env.NODE_ENV === "production") {
  //     config
  //       .plugin("BundleAnalyzerPlugin")
  //       .use(BundleAnalyzerPlugin, [{ analyzerMode: "static" }]);
  //   }
  // },
};
