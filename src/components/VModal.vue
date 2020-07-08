<template>
  <div>
    <transition name="fade">
      <div v-if="show" class="overlay" @click="$emit('close')" />
    </transition>
    <transition v-if="transition" :name="transition">
      <slot v-if="show" />
    </transition>
    <template v-else>
      <slot v-if="show" />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    transition: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
.overlay {
  @apply fixed inset-0 z-30 w-screen h-screen bg-black opacity-75 cursor-default;
}

.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.3s ease;
}
.fade-leave-to,
.fade-enter {
  opacity: 0;
}
</style>
