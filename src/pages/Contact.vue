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
  metaInfo: {
    title: "Contact Us",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "04512 008 115 | 99medispa.sydney@gmail.com | Contact us now online to book a consultation with our experienced physicians. We'll help you discover the best cosmetic laser treatments for your unique skin type.",
      },
    ],
  },
  components: {
    DefaultLayout,
    TheContactForm,
  },
};
</script>
