<template>
  <treatment-layout
    :background-node="$page.background.edges[0].node"
    :treatment-query-edges="$page.treatments.edges"
  />
</template>

<page-query>
query {
  treatments: allTreatments(filter: {type: {eq:"Laser Treatment"}}) {
    edges {
      node {
        title
        image
        content
        altText
      }
    }
  }
  background: allBackgrounds(filter: {title: {eq: "Laser Treatment"}}) {
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
    title: "Laser Treatment Sydney",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Using the best TGA and FDA approved technologies such as Picosure and Fotona, we at 99 Medispa provide an array of Laser Treatments at our clinic including Laser Hair Removal, Laser Tatoo Removal and reduce pigmentation and acne scars.",
      },
    ],
  },
  components: {
    TreatmentLayout,
  },
};
</script>
