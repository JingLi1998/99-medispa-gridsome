<template>
  <v-responsive class="cart-wrapper" :cols="12" :sm="8" :md="7" :lg="6" :xl="5">
    <div class="cart-header">
      <h3>Your Shopping Cart</h3>
      <v-button class="cart-close" @click="$emit('close-cart')">X</v-button>
    </div>

    <div>
      <div class="cart-items">
        <p v-if="!cartItems.length" class="pb-6 mt-6 border-b">
          Your cart is currently empty
        </p>
        <v-list v-else>
          <template v-for="{ item, quantity } in cartItems">
            <shopping-cart-item
              :key="item.price"
              :item="item"
              :quantity="quantity"
            />
            <hr :key="item.name" class="my-2" />
          </template>
        </v-list>
      </div>
    </div>

    <div class="cart-summary">
      <div class="cart-total">
        <h4 class="cart-total-label">Total</h4>
        <h4 class="cart-total-amount">
          {{ convertStripeAmount(total.toString()) }} AUD
        </h4>
      </div>
      <g-link to="/checkout/">
        <v-button
          class="checkout-button"
          :disabled="!cartItems.length"
          :class="{ 'opacity-50 cursor-default': !cartItems.length }"
          @click="$emit('close-cart')"
        >
          Go to Checkout
        </v-button>
      </g-link>
    </div>
  </v-responsive>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import ShoppingCartItem from "../components/ShoppingCartItem";
import { convertStripeAmount } from "../utils/stripeUtils";
import VList from "../components/VList";

export default {
  components: {
    ShoppingCartItem,
    VList,
  },
  computed: {
    ...mapState("cart", ["cartItems"]),
    ...mapGetters("cart", ["total"]),
  },
  methods: {
    convertStripeAmount,
  },
};
</script>

<style lang="scss" scoped>
.cart-wrapper {
  @apply fixed top-0 right-0 z-50 bg-white h-screen overflow-y-auto;
}

.cart-header {
  @apply flex justify-between  items-center h-24 border-b pl-6;
}

.cart-close {
  @apply border-l h-full w-24 text-5xl font-medium;
}

.cart-items {
  @apply px-6;
}

.cart-summary {
  @apply px-6;
}

.cart-total {
  @apply flex justify-between;
}

.checkout-button {
  @apply bg-secondary w-full py-2 text-white uppercase;
}

h3 {
  @apply text-3xl leading-9 font-medium my-6;
}

.cart-total-label {
  @apply text-xl font-bold uppercase my-6;
}

.cart-total-amount {
  @apply my-6 text-2xl uppercase;
}

@media (min-width: 640px) {
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
}
@media (min-width: 1440px) {
}
</style>
