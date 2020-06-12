<template>
  <v-button
    :class="{ 'opacity-50 cursor-default': !checkoutItems.length }"
    class="w-32 w-full p-2 mt-6 text-white uppercase rounded bg-secondary"
    :disabled="!checkoutItems.length"
    @click="checkout"
  >
    Go to checkout
  </v-button>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["stripe"]),
    ...mapGetters(["checkoutItems"]),
  },
  methods: {
    checkout() {
      this.stripe
        .redirectToCheckout({
          lineItems: this.checkoutItems,
          mode: "payment",
          successUrl: "http://localhost:8080/success",
          cancelUrl: "http://localhost:8080/canceled",
          shippingAddressCollection: {
            allowedCountries: ["AU"],
          },
        })
        .then(function (result) {
          if (result.error) {
            console.log(result.error);
          }
        });
    },
  },
};
</script>
