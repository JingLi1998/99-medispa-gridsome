<template>
  <div
    class="fixed top-0 right-0 w-full h-screen overflow-y-auto bg-white lg:w-4/12 z-60"
  >
    <!-- SHOPPING CART HEADER -->
    <div class="flex justify-between h-24 border-b border-gray-300">
      <h1 class="my-auto ml-8 text-3xl font-semibold uppercase">
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
    <div class="p-8">
      <p v-if="!lineItems.length">
        Your cart is currently empty.
      </p>
      <template v-else>
        <div v-for="(lineItem, index) in lineItems" :key="lineItem.price">
          <hr v-if="index !== 0" class="my-2" />
          <div class="flex justify-between">
            <p class="my-auto uppercase">
              <img
                class="inline object-contain w-32 h-24"
                :src="lineItem.images[0]"
              />
              {{ lineItem.name }}
            </p>
            <p class="my-auto mr-10">
              {{ insertDecimal(lineItem.amount) }}
            </p>
          </div>
        </div>
      </template>
      <hr class="my-8" />

      <!-- SHOPPING CART CHECKOUT -->
      <div class="flex justify-between">
        <p class="my-auto text-xl font-bold uppercase">Total</p>
        <p class="my-auto text-3xl uppercase">{{ total }} AUD</p>
      </div>
      <shopping-cart-button />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import ShoppingCartButton from "./ShoppingCartButton";

export default {
  components: {
    ShoppingCartButton,
  },
  computed: {
    ...mapState(["lineItems"]),
    total() {
      let total = 0;
      if (this.lineItems.length) {
        this.lineItems.forEach(
          (lineItem) => (total += Number(lineItem.amount))
        );
        return this.insertDecimal(total.toString());
      } else {
        return "$0.00";
      }
    },
  },
  methods: {
    insertDecimal(s) {
      return `$${s.slice(0, -2)}.${s.slice(-2)}`;
    },
  },
};
</script>
