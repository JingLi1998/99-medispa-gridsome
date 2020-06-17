<template>
  <transition name="notification">
    <div
      v-if="showNotification"
      class="fixed bottom-0 h-40 p-4 bg-white border notification sm:h-48 sm:top-0 sm:right-0 sm:mt-40 sm:mr-8"
    >
      <!-- NOTIFICATION TEXT -->
      <h1 class="my-auto text-lg font-semibold uppercase sm:mr-32 sm:text-xl">
        Item added to cart
      </h1>
      <hr class="my-4" />

      <!-- NOTIFICATION PRODUCT -->
      <div class="flex justify-between">
        <img
          class="object-contain w-24 h-16 sm:w-32 sm:h-24"
          :src="notificationItem.images[0]"
        />
        <p
          class="flex-grow my-auto text-xs font-semibold uppercase sm:text-base"
        >
          {{ notificationItem.name }}
        </p>
        <p class="my-auto mr-10 text-xs sm:text-base">
          {{ convertStripeAmount(notificationItem.amount) }} AUD
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
.notification-leave-active,
.notification-enter-active {
  transition: 0.8s ease;
}
.notification-enter {
  transform: translate(0, 100%);
}
.notification-leave-to {
  transform: translate(0, 100%);
}
.notification {
  width: 100%;
}

@media screen and (min-width: 640px) {
  .notification-leave-active,
  .notification-enter-active {
    transition: opacity 0.3s ease;
    transform: translate(0, 0);
  }
  .notification-leave-to,
  .notification-enter {
    opacity: 0;
    transform: translate(0, 0);
  }
  .notification {
    width: 500px;
  }
}
</style>
