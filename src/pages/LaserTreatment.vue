<template>
  <div>
    <background-image v-bind="backgroundInfo" />
    <information-panel
      v-for="(edge, index) in $page.treatments.edges"
      :key="index"
      :treatment="edge.node"
      :reverse="index % 2 !== 0"
    />
  </div>
</template>

<page-query>
query {
  treatments: allTreatments(filter: {type: {eq:"Laser Treatment"}}) {
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
import BackgroundImage from "../components/BackgroundImage";
import InformationPanel from "../components/InformationPanel";

export default {
  components: {
    BackgroundImage,
    InformationPanel,
  },
  data() {
    return {
      backgroundInfo: {
        imageSrc: "/images/laser_background.png",
        title: "Laser Treatment",
        subtitle:
          "99 Medispa is equipped with the world’s top laser equipment. Our American TDA and Australian FDA certified instruments will bring you an unparalleled beauty experience",
      },
      treatmentCategory: [],
    };
  },
  computed: {
    treatments() {
      return this.treatmentCategory.length
        ? this.treatmentCategory[0].treatments
        : null;
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-header {
  background: url(/images/laser_background.png) center center no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
