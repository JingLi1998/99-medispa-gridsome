<template>
  <div>
    <v-button
      :class="{ 'opacity-50 cursor-default': !lineItems.length }"
      class="w-full p-2 text-white uppercase bg-secondary"
      :disabled="!lineItems.length"
      @click="checkout"
    >
      Checkout With Stripe
    </v-button>
    <!-- <transition name="fade">
      <p v-if="error" class="mt-4 text-sm text-red-600 md:text-base">
        {{ error }}
      </p>
    </transition> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      error: null,
    };
  },
  computed: {
    ...mapState(["stripe"]),
    ...mapGetters("cart", ["lineItems"]),
  },
  methods: {
    async checkout() {
      this.error = null;
      try {
        const { error } = await this.stripe.redirectToCheckout({
          lineItems: this.lineItems,
          mode: "payment",
          successUrl: "https://99medispa.com.au/success",
          cancelUrl: "https://99medispa.com.au/cancelled",
          shippingAddressCollection: {
            allowedCountries: ["AU"],
          },
        });
        if (error) this.error = error.message;
      } catch (error) {
        this.error =
          "Something went wrong, please check your internet connection and try again.";
      }
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
