<template>
  <div>
    <v-background-image v-bind="$page.background.edges[0].node" />
    <div class="bg-white">
      <div
        class="grid w-10/12 row-gap-8 py-20 mx-auto md:w-8/12 lg:col-gap-20 lg:grid-cols-2 xl:grid-cols-3"
      >
        <price-list-section
          v-for="(title, index) in pricesOrder"
          :key="index"
          :type="title"
          :prices="priceObject[title]"
        />
      </div>
    </div>
  </div>
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
  prices: allPrices {
    edges {
      node {
        title
        type
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
import VBackgroundImage from "../components/VBackgroundImage";
import PriceListSection from "../components/PriceListSection";

export default {
  metaInfo: {
    title: "Price List",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Our 99 Medispa price list includes the best and safest FDA and TGA approved technologies in the Australian Laser Clinic market. Prices may vary based on treatment duration, so please book a consultation to further decide which treatment best suits you skincare needs.",
      },
    ],
  },
  components: {
    VBackgroundImage,
    PriceListSection,
  },
  data() {
    return {
      pricesOrder: [
        "Laser Treatment",
        "Skin Treatment",
        "Body Treatment",
        "Hair Removal",
        "Micro Plastic Injection",
        "Plastic Surgery",
      ],
    };
  },
  computed: {
    priceObject() {
      return this.$page.prices.edges.reduce((memo, { node }) => {
        if (!memo[node["type"]]) {
          memo[node["type"]] = [];
        }
        memo[node["type"]].push(node);
        return memo;
      }, {});
    },
  },
};
</script>
