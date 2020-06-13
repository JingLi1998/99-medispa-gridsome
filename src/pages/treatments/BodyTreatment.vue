<template>
  <treatment-layout
    :background-node="$page.background.edges[0].node"
    :treatment-query-edges="$page.treatments.edges"
  />
</template>

<page-query>
query {
  treatments: allTreatments(filter: {type: {eq:"Body Treatment"}}) {
    edges {
      node {
        title
        image
        content
        altText
      }
    }
  }
  background: allBackgrounds(filter: {title: {eq: "Body Treatment"}}) {
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
    title: "Body Treatment Sydney",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "99 Medispa provides a range of body slimming treatments aimed at helping you achieve your desired figure without invasive methods. We use FDA and TGA approved technologies such as Endymed, CoolSculpting, Ultherapy and more.",
      },
    ],
  },
  components: {
    TreatmentLayout,
  },
};
</script>
