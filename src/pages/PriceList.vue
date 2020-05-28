<template>
  <default-layout :background-node="$page.background.edges[0].node">
  </default-layout>
</template>

<page-query>
query {
    background: allBackgrounds(filter: {title: {eq: "Price List"}}) {
    edges {
      node {
        title
        subtitle
        image
        altText
      }
    }
  }
  laserTreatments: allPrices(filter: {type: {eq: "Laser Treatment"}}) {
    edges {
      node {
        title
        treatments {
          name
          price
        }
      }
    }
  }
  skinTreatments: allPrices(filter: {type: {eq: "Skin Treatment"}}) {
    edges {
      node {
        title
        treatments {
          name
          price
        }
      }
    }
  }
  bodyTreatments: allPrices(filter: {type: {eq: "Body Treatment"}}) {
    edges {
      node {
        title
        treatments {
          name
          price
        }
      }
    }
  }
  hairRemoval: allPrices(filter: {type: {eq: "Hair Removal"}}) {
    edges {
      node {
        title
        treatments {
          name
          price
        }
      }
    }
  }
  microPlasticInjection: allPrices(filter: {type: {eq: "Micro Plastic Injection"}}) {
    edges {
      node {
        title
        treatments {
          name
          price
        }
      }
    }
  }
  plasticSurgery: allPrices(filter: {type: {eq: "Plastic Surgery"}}) {
    edges {
      node {
        title
        treatments {
          name
          price
        }
      }
    }
  }
}
</page-query>

<script>
import DefaultLayout from "../layouts/DefaultLayout";

export default {
  components: {
    DefaultLayout,
  },
};
</script>
