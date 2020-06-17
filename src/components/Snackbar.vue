<template>
  <transition name="fade">
    <div
      v-if="show"
      class="fixed py-4 mx-auto text-center text-white rounded-lg shadow-2xl bg-secondary"
      style="width: 60vh; top: 125px;"
    >
      {{ text }}
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
