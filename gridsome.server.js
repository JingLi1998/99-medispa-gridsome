// TO DO
// DOWNLOAD IMAGES FROM STRIPE API
// SAVE TO STATIC FOLDER
// RECONFIGURE EACH IMAGE TO HAVE UPDATED STATIC FILE FOR G-IMAGE

const fs = require("fs");
const request = require("request");
const stripe = require("stripe")(process.env.SECRET_KEY);

const downloadImage = (url, path, callback) => {
  request.head(url, () => {
    request(url).pipe(fs.createWriteStream(path)).on("close", callback);
  });
};

module.exports = function (api) {
  api.loadSource(async (actions) => {
    const { data: prices } = await stripe.prices.list();
    const { data: products } = await stripe.products.list();

    let merged = [];

    prices.forEach((price) => {
      const product = products.find((product) => product.id === price.product);
      const url = product.images[0];
      const name = url.substring(31);
      const path = `./static/stripeImages/${name}.jpg`;
      downloadImage(url, path, () => {
        console.log(`${url} finished downloading`);
      });

      merged.push({
        ...price,
        images: [path.substring(8)],
        name: product.name,
        description: product.description,
        slug: product.name.replace(/ /g, "-").toLowerCase(),
      });
    });

    const collection = actions.addCollection({
      typeName: "StripeProducts",
    });

    merged.forEach((item) => {
      collection.addNode({ ...item });
    });
  });

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        allStripeProducts {
          edges {
            node {
              price: id
              slug
              active
              currency
              amount: unit_amount_decimal
              product
              images
              name
              description
            }
          }
        }
      }
    `);

    data.allStripeProducts.edges.forEach(({ node }) => {
      createPage({
        path: `/products/${node.slug}`,
        component: "./src/templates/ProductPage.vue",
        context: {
          ...node,
        },
      });
    });
  });
};
