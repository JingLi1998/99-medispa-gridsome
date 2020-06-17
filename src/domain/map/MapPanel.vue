<template>
  <div>
    <transition name="fade">
      <overlay
        v-if="show"
        class="cursor-default"
        @clicked="$emit('closeMap')"
      />
    </transition>

    <transition name="fade">
      <iframe
        v-show="show"
        class="z-30 w-full h-64 centered"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13251.018307582943!2d151.205775!3d-33.8702153!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdab6ea0ecb5e72f4!2s99%20Medispa!5e0!3m2!1sen!2sau!4v1591761213204!5m2!1sen!2sau"
        width="800"
        height="600"
        frameborder="0"
        style="border: 0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </transition>
  </div>
</template>

<script>
import Overlay from "../../components/Overlay";

export default {
  components: {
    Overlay,
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
.slide-leave-active,
.slide-enter-active {
  transition: 0.8s ease;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
</style>
