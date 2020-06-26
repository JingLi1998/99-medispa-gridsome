<template>
  <div
    class="fixed top-0 right-0 z-30 w-full h-screen overflow-y-auto bg-white scrollbar-hidden sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12"
  >
    <!-- SHOPPING CART HEADER -->
    <div class="flex justify-between h-24 border-b border-gray-300">
      <h1 class="my-auto ml-8 text-xl font-semibold uppercase lg:text-3xl">
        Your Shopping Cart
      </h1>
      <div class="flex w-24 h-full border-l border-gray-300">
        <p
          class="m-auto text-5xl font-medium text-center cursor-pointer"
          @click="$emit('closeCart')"
        >
          X
        </p>
      </div>
    </div>

    <!-- SHOPPING CART lIST -->
    <div class="p-2 sm:p-8">
      <p v-if="!cartItems.length">
        Your cart is currently empty.
      </p>
      <template v-else>
        <v-list>
          <template v-for="(cartItem, index) in cartItems">
            <hr v-if="index !== 0" :key="cartItem.item.price" class="my-2" />
            <shopping-cart-list-item
              :key="cartItem.item.price"
              v-bind="cartItem"
            />
          </template>
        </v-list>
      </template>
      <hr class="mt-2 mb-8" />

      <!-- SHOPPING CART CHECKOUT -->
      <div class="flex justify-between">
        <p class="my-auto text-xl font-bold uppercase">Total</p>
        <p class="my-auto text-3xl uppercase">{{ total }} AUD</p>
      </div>
      <shopping-cart-list-button @closeCart="$emit('closeCart')" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import ShoppingCartListButton from "./ShoppingCartListButton";
import ShoppingCartListItem from "./ShoppingCartListItem";
import { convertStripeAmount } from "../../utils/stripeUtils";
import VList from "../../components/VList";

export default {
  components: {
    ShoppingCartListButton,
    ShoppingCartListItem,
    VList,
  },
  computed: {
    ...mapState("cart", ["cartItems"]),
    total() {
      let total = 0;
      if (this.cartItems.length) {
        this.cartItems.forEach(
          (cartItem) =>
            (total += Number(cartItem.item.amount) * cartItem.quantity)
        );
        return this.convertStripeAmount(total.toString());
      } else {
        return "$0.00";
      }
    },
  },
  methods: {
    convertStripeAmount,
  },
};
</script>

<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
.scrollbar-hidden {
  -ms-overflow-style: none;
}
</style>
