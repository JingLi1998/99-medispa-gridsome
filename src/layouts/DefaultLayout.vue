<template>
  <div>
    <background-image v-bind="backgroundNode" />
    <slot />
  </div>
</template>

<script>
import BackgroundImage from "../components/BackgroundImage";

export default {
  components: {
    BackgroundImage,
  },
  props: {
    backgroundNode: {
      type: Object,
      required: true,
    },
  },
};
</script>
