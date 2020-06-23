module.exports = {
  launch: {
    // headless: process.env.HEADLESS !== "false",
    headless: false,
    slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,
    devtools: false,
    args: [
      "--start-maximized", // you can also use '--start-fullscreen'
    ],
  },
};
