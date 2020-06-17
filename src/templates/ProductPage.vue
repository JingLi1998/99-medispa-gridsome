<template>
  <div
    class="w-full mx-auto mt-20 md:mt-32 lg:w-10/12 lg:mt-40 lg:mb-8 md:grid md:grid-cols-2 md:border xl:w-8/12"
  >
    <!-- PRODUCT IMAGE -->
    <div class="relative">
      <g-image
        class="object-cover h-full mx-auto image"
        :src="$context.images[0]"
      />
      <div
        class="absolute inset-0 flex w-16 h-16 transition duration-300 bg-black bg-opacity-0 border-b border-r cursor-pointer hover:bg-opacity-10 transition:opacity"
        @click="$router.go(-1)"
      >
        <span class="m-auto text-xl">&larr;</span>
      </div>
    </div>

    <!-- PRODUCT NAME AND PRICE -->
    <div class="px-6 border-l md:py-10">
      <h1 class="mb-8 text-2xl font-bold uppercase md:text-3xl">
        {{ $context.name }}
      </h1>
      <p class="text-xl font-medium">
        {{ convertStripeAmount($context.amount) }} AUD
      </p>
      <v-button
        class="w-full py-2 my-4 text-center text-white bg-secondary"
        :class="{
          'opacity-50 cursor-default': inCart,
          'hover:bg-opacity-50': !inCart,
        }"
        :disabled="inCart"
        @click="addLineItem($context)"
      >
        {{ inCart ? "Added To Cart" : "Add To Cart" }}
      </v-button>
      <hr />
      <p class="mt-4 mb-10 font-light">{{ $context.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import { convertStripeAmount } from "../utils/stripeUtils";

export default {
  metaInfo() {
    return {
      title: this.$context.name,
    };
  },
  computed: {
    ...mapState(["lineItems"]),
    inCart() {
      return !!this.lineItems.filter(
        (item) => item.lineItem.name === this.$context.name
      ).length;
    },
  },
  methods: {
    ...mapActions(["addLineItem"]),
    convertStripeAmount,
    doThis() {
      console.log(this.$context);
    },
  },
};
</script>

<style scoped>
.card {
  height: 500px;
}
.image {
  width: 400px;
}
</style>
