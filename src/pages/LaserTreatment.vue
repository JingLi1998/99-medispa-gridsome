<template>
  <div>
    <br /><br /><br /><br /><br />
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
import InformationPanel from "../components/InformationPanel";

export default {
  components: {
    InformationPanel,
  },
  data() {
    return {
      backgroundInfo: {
        imageSrc: "/imgs/backgrounds/laser_background.png",
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
