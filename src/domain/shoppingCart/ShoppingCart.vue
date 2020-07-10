<template>
  <div>
    <transition name="fade">
      <v-overlay
        v-if="show"
        class="cursor-default"
        @clicked="$emit('closeCart')"
      />
    </transition>

    <transition name="slide">
      <shopping-cart-list
        v-if="show"
        class="cursor-default"
        @closeCart="$emit('closeCart')"
      />
    </transition>
  </div>
</template>

<script>
import VOverlay from "../../components/VOverlay";
import ShoppingCartList from "./ShoppingCartList";

export default {
  components: {
    VOverlay,
    ShoppingCartList,
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
</style>
