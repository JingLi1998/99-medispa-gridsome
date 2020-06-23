module.exports = {
  preset: "jest-puppeteer",
  globals: {
    URL: "https://dev--99medispa.netlify.app",
  },
  testMatch: ["**/tests/**/*.test.js"],
  verbose: true,
};
