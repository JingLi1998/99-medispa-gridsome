<template>
  <div>
    <background-image v-bind="backgroundNode" />
    <information-panel
      v-for="(edge, index) in treatmentQueryEdges"
      :key="index"
      v-bind="edge.node"
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
    backgroundNode: {
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
