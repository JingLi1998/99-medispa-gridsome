<template>
  <default-layout :background-node="backgroundNode">
    <v-information-panel
      v-for="(edge, index) in treatmentQueryEdges"
      :key="index"
      v-bind="edge.node"
      :reverse="index % 2 !== 0"
    />
  </default-layout>
</template>

<script>
import DefaultLayout from "./DefaultLayout";
import VInformationPanel from "../components/VInformationPanel";

export default {
  components: {
    DefaultLayout,
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
