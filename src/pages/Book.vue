<template>
  <default-layout :background-node="$page.background.edges[0].node">
  </default-layout>
</template>

<page-query>
query {
    background: allBackgrounds(filter: {title: {eq: "Contact Us"}}) {
    edges {
      node {
        title
        subtitle
        image
        altText
      }
    }
  }
}
</page-query>

<script>
import DefaultLayout from "../layouts/DefaultLayout";

export default {
  metaInfo: {
    title: "Make a Booking",
  },
  components: {
    DefaultLayout,
  },
};
</script>
