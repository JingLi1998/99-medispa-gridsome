<template>
  <default-layout :background-node="$page.background.edges[0].node">
    <the-price-list :price-edges="priceEdges" />
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
  # prices: allPrices {
  #   edges {
  #     node {
  #       title
  #       type
  #       treatments {
  #         name
  #         price
  #       }
  #     }
  #   }
  # }
  laserTreatment: allPrices(filter: {type: {eq: "Laser Treatment"}}) {
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
  skinTreatment: allPrices(filter: {type: {eq: "Skin Treatment"}}) {
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
  bodyTreatment: allPrices(filter: {type: {eq: "Body Treatment"}}) {
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
import ThePriceList from "../components/ThePriceList";

export default {
  metaInfo: {
    title: "Price List",
  },
  components: {
    DefaultLayout,
    ThePriceList,
  },
  computed: {
    priceEdges() {
      return {
        laserTreatment: this.$page.laserTreatment.edges,
        skinTreatment: this.$page.skinTreatment.edges,
        bodyTreatment: this.$page.bodyTreatment.edges,
        hairRemoval: this.$page.hairRemoval.edges,
        microPlasticInjection: this.$page.microPlasticInjection.edges,
        plasticSurgery: this.$page.plasticSurgery.edges,
      };
    },
  },
};
</script>
