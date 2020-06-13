<template>
  <treatment-layout
    :background-node="$page.background.edges[0].node"
    :treatment-query-edges="$page.treatments.edges"
  />
</template>

<page-query>
query {
  treatments: allTreatments(filter: {type: {eq:"Cosmetic Injection"}}) {
    edges {
      node {
        title
        image
        content
        altText
      }
    }
  }
  background: allBackgrounds(filter: {title: {eq: "Cosmetic Injection"}}) {
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
import TreatmentLayout from "../../layouts/TreatmentLayout";

export default {
  metaInfo: {
    title: "Cosmetic Injection Sydney",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Our experienced physicians provide a range of popular cosmetic injection treatments including Botox, PRP Tubes and similar dermal fillers to help you achieve your desired state of beauty. Consult with us today to find out which one is best for you.",
      },
    ],
  },
  components: {
    TreatmentLayout,
  },
};
</script>
