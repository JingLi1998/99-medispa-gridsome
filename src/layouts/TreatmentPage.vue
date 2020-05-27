<template>
  <div>
    <background-image v-bind="backgroundInfo" />
    <information-panel
      v-for="(edge, index) in treatmentQueryEdges"
      :key="index"
      :treatment="edge.node"
      :reverse="index % 2 !== 0"
    />
  </div>
</template>

<script>
import BackgroundImage from "../components/BackgroundImage";
import InformationPanel from "../components/InformationPanel";

export default {
  components: {
    BackgroundImage,
    InformationPanel,
  },
  props: {
    backgroundInfo: {
      type: Object,
      required: true,
    },
    treatmentQueryEdges: {
      type: Array,
      required: true,
    },
  },
};
</script>
