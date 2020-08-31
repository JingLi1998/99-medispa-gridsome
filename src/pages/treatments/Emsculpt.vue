<template>
  <treatment-layout
    :background-node="$page.background.edges[0].node"
    :treatment-query-edges="$page.treatments.edges"
  />
</template>

<page-query>
query {
  treatments: allTreatments(filter: {type: {eq:"Emsculpt"}}) {
    edges {
      node {
        title
        image
        content
        altText
      }
    }
  }
  background: allBackgrounds(filter: {title: {eq: "Emsculpt"}}) {
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
    title: "Emsculpt Treatment Sydney",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "99 Medispa now offers EmSculpt treatment, a new form of non-invasive body contouring treatment. Unlike fat-freezing treatments, this revolutionary technology achieves body contouring by simultaneously building muscle whilst also burning fat, delivering the equivalent of 20,000 sit-ups or squats in a single 30 minute session!",
      },
    ],
  },
  components: {
    TreatmentLayout,
  },
};
</script>
