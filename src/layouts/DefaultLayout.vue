<template>
  <div id="defaultLayout">
    <v-background-image v-bind="backgroundNode" />
    <slot />
  </div>
</template>

<script>
import VBackgroundImage from "../components/VBackgroundImage";

export default {
  components: {
    VBackgroundImage,
  },
  props: {
    backgroundNode: {
      type: Object,
      required: true,
    },
  },
};
</script>
