<template>
  <div>
    <v-background-image v-bind="$page.background.edges[0].node" />
    <contact-form />
  </div>
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
import ContactForm from "../domain/contact/ContactForm";
import VBackgroundImage from "../components/VBackgroundImage";

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
    ContactForm,
    VBackgroundImage,
  },
};
</script>
