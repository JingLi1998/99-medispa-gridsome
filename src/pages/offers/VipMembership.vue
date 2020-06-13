<template>
  <treatment-layout
    :background-node="$page.background.edges[0].node"
    :treatment-query-edges="$page.offers.edges"
  />
</template>

<page-query>
query {
  background: allBackgrounds(filter: {title: {eq: "VIP Membership"}}) {
    edges {
      node {
        title
        subtitle
        image
        altText
      }
    }
  }
  offers: allOffers (sortBy: "position", order: ASC, filter: {type: {eq:"VIP Membership"}}) {
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
    title: "VIP Spa Membership",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Join us with our VIP Spa Membership and indulge in our vast range of treatments at our Laser Clinic all year round. VIP members receive the latest specials, deals and even early access to our newest treatment and skincare range.",
      },
    ],
  },
  components: {
    TreatmentLayout,
  },
};
</script>
