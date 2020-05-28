<template>
  <default-layout :background-node="$page.background.edges[0].node">
    <the-contact-form />
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
import TheContactForm from "../components/TheContactForm";

export default {
  components: {
    DefaultLayout,
    TheContactForm,
  },
};
</script>
