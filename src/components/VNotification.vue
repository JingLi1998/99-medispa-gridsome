<template>
  <transition name="fade">
    <div
      v-if="showNotification"
      class="fixed z-40 h-64 p-4 mt-40 mr-8 bg-white border border-gray-300"
    >
      <h1 class="my-auto mr-32 text-xl font-semibold uppercase">
        Item added to cart
      </h1>
      <hr class="my-4" />
      <div class="flex justify-between">
        <p class="my-auto uppercase">
          <img
            class="inline object-contain w-32 h-24"
            :src="notificationItem.images[0]"
          />
          {{ notificationItem.name }}
        </p>
        <p class="my-auto mr-10">
          {{ convertStripeAmount(notificationItem.amount) }}
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";

import { convertStripeAmount } from "../utils/stripeUtils";

export default {
  computed: {
    ...mapState(["showNotification", "notificationItem"]),
  },
  methods: {
    convertStripeAmount,
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
