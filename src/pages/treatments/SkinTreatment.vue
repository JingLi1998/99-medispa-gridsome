<template>
  <treatment-layout
    :background-node="$page.background.edges[0].node"
    :treatment-query-edges="$page.treatments.edges"
  />
</template>

<page-query>
query {
  treatments: allTreatments(filter: {type: {eq:"Skin Treatment"}}) {
    edges {
      node {
        title
        image
        content
        altText
      }
    }
  }
  background: allBackgrounds(filter: {title: {eq: "Skin Treatment"}}) {
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
    title: "Skin Treatment Sydney",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "99 Medispa provides numerous skin treatments to help rejuvenate your skin, returning to its youthful state, at an affordable price!",
      },
    ],
  },
  components: {
    TreatmentLayout,
  },
};
</script>
