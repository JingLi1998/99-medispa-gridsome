<template>
  <div>
    <transition name="fade">
      <overlay
        v-if="show"
        class="cursor-default"
        @clicked="$emit('closeCart')"
      />
    </transition>

    <transition name="slide">
      <shopping-cart-items
        v-if="show"
        class="cursor-default"
        @closeCart="$emit('closeCart')"
      />
    </transition>
  </div>
</template>

<script>
import Overlay from "../../components/Overlay";
import ShoppingCartItems from "./ShoppingCartItems";

export default {
  components: {
    Overlay,
    ShoppingCartItems,
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
