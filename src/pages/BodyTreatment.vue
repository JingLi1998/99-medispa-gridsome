<template>
  <treatment-page
    :background-info="backgroundInfo"
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
      }
    }
  }
}
</page-query>

<script>
import TreatmentPage from "../layouts/TreatmentPage";

export default {
  components: {
    TreatmentPage,
  },
  data() {
    return {
      backgroundInfo: {
        imageSrc: "/images/body_background.png",
        title: "Body Treatment",
        subtitle:
          "Experience the ultimate full body rejuvenation with an individualised body treatment for tailored results",
      },
    };
  },
};
</script>
