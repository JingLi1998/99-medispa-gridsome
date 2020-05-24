// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        purgeConfig: {
          content: ["src/assets/**/*.css", "src/**/*.vue", "src/**/*.js"],
          options: {
            whitelist: ["svg-inline--fa"],
            whitelistPatterns: [/svg.*/, /fa.*/, /shiki/, /fa-$/],
          },
        },
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
