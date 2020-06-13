<template>
  <treatment-layout
    :background-node="$page.background.edges[0].node"
    :treatment-query-edges="$page.offers.edges"
  />
</template>

<page-query>
query {
  background: allBackgrounds(filter: {title: {eq: "Birthday Pamper Packages"}}) {
    edges {
      node {
        title
        subtitle
        image
        altText
      }
    }
  }
  offers: allOffers (sortBy: "position", order: ASC, filter: {type: {eq:"Birthday Package"}}) {
   edges{
      node {
				title
        content
        position
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
    title: "Birthday Party Packages",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Celebrate your next Birthday Party with one of our Luxury Birthday Packages. Whether it's a girls night out or even a relaxing night in, we'll provide you with an outting to remember. Indulge in food, drinks and complimentary treatments at our Laser Clinic located right in the Sydney CBD Australia!",
      },
    ],
  },
  components: {
    TreatmentLayout,
  },
};
</script>
