<template>
  <product-list :product-edges="$page.products.edges" />
</template>

<page-query>
query {
  products: allStripeProducts {
    edges {
      node {
        amount: unit_amount_decimal
        product
        images
        name
        slug
        metadata {
          brand
        }
      }
    }
  }
}
</page-query>

<script>
import ProductList from "../domain/products/ProductList";

export default {
  metaInfo: {
    title: "Buy Skincare Products Online",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Browse our online store to view our range of beauty and cosmetic skincare products. A good skincare routine is essential for maintaining your youthful complexion. We stock the best brands including Jansenn, Skinceuticals and more!",
      },
    ],
  },
  components: {
    ProductList,
  },
};
</script>
