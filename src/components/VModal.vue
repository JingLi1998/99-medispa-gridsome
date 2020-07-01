<template>
  <div>
    <transition name="fade">
      <v-overlay v-if="show" class="cursor-default" @clicked="$emit('close')" />
    </transition>

    <div v-if="show">
      <slot />
    </div>
  </div>
</template>

<script>
import VOverlay from "./VOverlay";

export default {
  components: {
    VOverlay,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.3s ease;
}
.fade-leave-to,
.fade-enter {
  opacity: 0;
}
</style>
