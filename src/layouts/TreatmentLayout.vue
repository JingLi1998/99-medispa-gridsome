<template>
  <div>
    <v-background-image v-bind="backgroundNode" />
    <v-information-panel
      v-for="(edge, index) in treatmentQueryEdges"
      :key="index"
      v-bind="edge.node"
      :reverse="index % 2 !== 0"
    />
  </div>
</template>

<script>
import VInformationPanel from "../components/VInformationPanel";
import VBackgroundImage from "../components/VBackgroundImage";

export default {
  components: {
    VBackgroundImage,
    VInformationPanel,
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
