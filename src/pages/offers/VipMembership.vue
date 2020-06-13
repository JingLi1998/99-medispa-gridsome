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
    script: [
      {
        type: "application/ld+json",
        json: [
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "VIP Membership",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "The Secret Menu",
            articleBody:
              "As part of our VIP Membership club, you&#39;ll have access to some of our best deals and packages. Bonus AquaPeel Facial? Complimentary LED Light Therapy? We&#39;ll always have a surprise in store for all our members",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "VIP Membership",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Unlimited Treatments",
            articleBody:
              "Every yearly membership gives our customers unlimited access to our vast array of state-of-the-art beauty technologies. No matter your goal, we&#39;ll help you maintain your beauty all year round.",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "VIP Membership",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "A Second Home",
            articleBody:
              "We invite our VIP clients to treat our clinic as a second home. Feel free to visit us whenever you are in the Sydney CBD. We are always more than happy to have a chat, and discuss any new skin concerns you might be having!",
          },
        ],
      },
    ],
  },
  components: {
    TreatmentLayout,
  },
};
</script>
