<template>
  <treatment-layout
    :background-node="$page.background.edges[0].node"
    :treatment-query-edges="$page.treatments.edges"
  />
</template>

<page-query>
query {
  treatments: allTreatments(filter: {type: {eq:"Traditional Medicine"}}) {
    edges {
      node {
        title
        image
        content
        altText
      }
    }
  }
  background: allBackgrounds(filter: {title: {eq: "Traditional Chinese Medicine"}}) {
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
    title: "Traditional Chinese Medicine Sydney",
    meta: [
      {
        name: "description",
        key: "description",
        content:
          "Chinese medicine follows the traditions of yin and yang. Cultivate the body and mind in the most traditional and ancient way.",
      },
    ],
  },
  components: {
    TreatmentLayout,
  },
};
</script>
