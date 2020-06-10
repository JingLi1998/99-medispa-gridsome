<template>
  <div>
    <product-list :product-edges="$page.products.edges" />
  </div>
</template>

<page-query>
query {
  products: allStripeProducts {
    edges {
      node {
        price: id
        active
        currency
        amount: unit_amount_decimal
        product
        images
        name
        slug
      }
    }
  }
}
</page-query>

<script>
import ProductList from "../domain/products/ProductList";

export default {
  metaInfo: {
    title: "Products",
  },
  components: {
    ProductList,
  },
};
</script>
