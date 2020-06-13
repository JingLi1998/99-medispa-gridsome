<template>
  <treatment-layout
    :background-node="$page.background.edges[0].node"
    :treatment-query-edges="$page.treatments.edges"
  />
</template>

<page-query>
query {
  treatments: allTreatments(filter: {type: {eq:"Plastic Surgery"}}) {
    edges {
      node {
        title
        image
        content
        altText
      }
    }
  }
  background: allBackgrounds(filter: {title: {eq: "Plastic Surgery"}}) {
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
    title: "Plastic Surgery Sydney",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "If our non-invasive Laser Treatments provided at our clinic don't happen to suit your needs, we also provide a range of plastic surgery options. Our experienced physicians will help you achieve your desired look today!",
      },
    ],
  },
  components: {
    TreatmentLayout,
  },
};
</script>
