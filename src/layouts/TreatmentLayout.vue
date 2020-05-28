<template>
  <default-layout :background-node="backgroundNode">
    <information-panel
      v-for="(edge, index) in treatmentQueryEdges"
      :key="index"
      v-bind="edge.node"
      :reverse="index % 2 !== 0"
    />
  </default-layout>
</template>

<script>
import DefaultLayout from "./DefaultLayout";
import InformationPanel from "../components/InformationPanel";

export default {
  components: {
    DefaultLayout,
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
