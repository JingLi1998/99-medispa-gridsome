const timeout = process.env.SLOWMO ? 30000 : 30000;

beforeAll(async () => {
  await page.goto(URL, { waitUntil: "domcontentloaded" });
  await page.setViewport({
    width: 1980,
    height: 1080,
  });
});

describe("Test Successful Checkout", () => {
  test(
    "Title of Home Page",
    async () => {
      const title = await page.title();
      expect(title).toBe(
        "99 Medispa | Cosmetic Laser Treatment Clinic Australia"
      );
    },
    timeout
  );

  test(
    "Products Navbar Link",
    async () => {
      await page.waitForSelector(
        ".fixed > .flex > div > .mr-2 > .inline-block:nth-child(5)"
      );
      await page.click(
        ".fixed > .flex > div > .mr-2 > .inline-block:nth-child(5)"
      );
      await page.waitForNavigation({ waitUntil: "networkidle0" });
      const title = await page.title();
      expect(title).toBe("Buy Skincare Products Online | 99 Medispa");
    },
    timeout
  );

  test(
    "Add Product to Cart",
    async () => {
      await page.waitForSelector(
        ".grid > div:nth-child(1) > .relative > .mt-1 > .object-contain"
      );
      await page.click(
        ".grid > div:nth-child(1) > .relative > .mt-1 > .object-contain"
      );
      await page.waitForSelector(
        ".scrollbar-hidden > #app > .w-full > .px-6 > .focus\\3Aoutline-none"
      );
      await page.click(
        ".scrollbar-hidden > #app > .w-full > .px-6 > .focus\\3Aoutline-none"
      );
      await page.waitForSelector(
        ".fixed > .flex > div:nth-child(2) > .focus\\3Aoutline-none > .svg-inline--fa"
      );
      await page.click(
        ".fixed > .flex > div:nth-child(2) > .focus\\3Aoutline-none > .svg-inline--fa"
      );
      await page.waitForSelector(".text-3xl");
      await new Promise((r) => setTimeout(r, 1000));
      const inner_html = await page.$eval(
        ".text-3xl",
        (element) => element.innerHTML
      );
      expect(inner_html).toBe("$55.00 AUD");
    },
    timeout
  );

  test(
    "Checkout Button",
    async () => {
      await page.waitForSelector(
        "#app > .cursor-pointer > .fixed > .p-2 > .focus\\3Aoutline-none"
      );
      await page.click(
        "#app > .cursor-pointer > .fixed > .p-2 > .focus\\3Aoutline-none"
      );
      await page.waitForNavigation({ waitUntil: "networkidle0" });
      const title = await page.title();
      expect(title).toBe("99 Medispa");
    },
    timeout
  );

  test(
    "Fill Payment Form",
    async () => {
      await page.type("#email", "foo@example.com");
      await page.type("#shippingName", "Foo Bar");
      await page.type("#shippingAddressLine1", "123 Foo Street");
      await page.type("#shippingLocality", "Bar");
      await page.select("#shippingAdministrativeArea", "NSW");
      await page.type("#shippingPostalCode", "1234");
      await page.type("#cardNumber", "4242424242424242", { delay: 100 });
      await page.type("#cardExpiry", "0523", { delay: 100 });
      await page.type("#cardCvc", "123", { delay: 100 });
      await new Promise((r) => setTimeout(r, 1000));
      await page.waitForSelector("button[type=submit]");
      await page.click("button[type=submit]");
      await page.waitForNavigation({ waitUntil: "domcontentloaded" });
      const title = await page.title();
      expect(title).toBe("Payment Successful | 99 Medispa");
    },
    timeout
  );
});

describe("Test Cancelled Checkout", () => {
  test(
    "Title of Home Page",
    async () => {
      await page.goto(URL, { waitUntil: "domcontentloaded" });
      const title = await page.title();
      expect(title).toBe(
        "99 Medispa | Cosmetic Laser Treatment Clinic Australia"
      );
    },
    timeout
  );

  test(
    "Products Navbar Link",
    async () => {
      await page.waitForSelector(
        ".fixed > .flex > div > .mr-2 > .inline-block:nth-child(5)"
      );
      await page.click(
        ".fixed > .flex > div > .mr-2 > .inline-block:nth-child(5)"
      );
      await page.waitForNavigation({ waitUntil: "networkidle0" });
      const title = await page.title();
      expect(title).toBe("Buy Skincare Products Online | 99 Medispa");
    },
    timeout
  );

  test(
    "Add Product to Cart",
    async () => {
      await page.waitForSelector(
        ".grid > div:nth-child(1) > .relative > .mt-1 > .object-contain"
      );
      await page.click(
        ".grid > div:nth-child(1) > .relative > .mt-1 > .object-contain"
      );
      await page.waitForSelector(
        ".scrollbar-hidden > #app > .w-full > .px-6 > .focus\\3Aoutline-none"
      );
      await page.click(
        ".scrollbar-hidden > #app > .w-full > .px-6 > .focus\\3Aoutline-none"
      );
      await page.waitForSelector(
        ".fixed > .flex > div:nth-child(2) > .focus\\3Aoutline-none > .svg-inline--fa"
      );
      await page.click(
        ".fixed > .flex > div:nth-child(2) > .focus\\3Aoutline-none > .svg-inline--fa"
      );
      await page.waitForSelector(".text-3xl");
      await new Promise((r) => setTimeout(r, 1000));
      const inner_html = await page.$eval(
        ".text-3xl",
        (element) => element.innerHTML
      );
      expect(inner_html).toBe("$55.00 AUD");
    },
    timeout
  );

  test(
    "Checkout Button",
    async () => {
      await page.waitForSelector(
        "#app > .cursor-pointer > .fixed > .p-2 > .focus\\3Aoutline-none"
      );
      await page.click(
        "#app > .cursor-pointer > .fixed > .p-2 > .focus\\3Aoutline-none"
      );
      await page.waitForNavigation({ waitUntil: "networkidle0" });
      const title = await page.title();
      expect(title).toBe("99 Medispa");
    },
    timeout
  );

  test(
    "Cancel Payment Button",
    async () => {
      await page.waitForSelector(".Header-BusinessLink-label > span");
      await page.click(".Header-BusinessLink-label > span");
      await page.waitForNavigation({ waitUntil: "domcontentloaded" });
      const title = await page.title();
      expect(title).toBe("Checkout Cancelled | 99 Medispa");
    },
    timeout
  );
});
