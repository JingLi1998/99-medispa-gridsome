// TO DO
// DOWNLOAD IMAGES FROM STRIPE API
// SAVE TO STATIC FOLDER
// RECONFIGURE EACH IMAGE TO HAVE UPDATED STATIC FILE FOR G-IMAGE

const stripe = require("stripe")(
  "sk_test_51GqzvrLfMbezZRstkwlZ9KtjiHb8VbV9MSF00Etq0LgZyKeqFcZnJIVfD0yCSjiiB8ILDajkAXqx7s83pE0xykQS001TY6oetE"
);

module.exports = function (api) {
  api.loadSource(async (actions) => {
    const { data: prices } = await stripe.prices.list();
    const { data: products } = await stripe.products.list();

    let merged = [];

    prices.forEach((price) => {
      const product = products.find((product) => product.id === price.product);
      merged.push({
        ...price,
        images: product.images,
        name: product.name,
        description: product.description,
        slug: product.name.replace(/ /g, "-"),
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
