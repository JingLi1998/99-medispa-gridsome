<template>
  <div class="w-6/12 mx-auto mt-40 mb-10">
    <div class="flex justify-between card">
      <div class="relative">
        <g-image
          class="object-contain h-full border border-gray-300 shadow-md image"
          :src="$context.images[0]"
        />
        <div
          class="absolute inset-0 flex w-16 h-16 transition duration-300 bg-black bg-opacity-0 border-b border-r border-gray-300 cursor-pointer hover:bg-opacity-10 transition:opacity"
          @click="$router.go(-1)"
        >
          <span class="m-auto text-xl">&larr;</span>
        </div>
      </div>
      <div class="w-4/12 h-full p-4 border border-gray-300 shadow-md">
        <h1>{{ $context.name }}</h1>
        <p>{{ convertStripeAmount($context.amount) }}</p>
        <v-button @click="addLineItem($context)">Add To Cart</v-button>
      </div>
    </div>
    <div class="w-full p-4 mt-8 border border-gray-300 shadow-md card">
      <p>{{ $context.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import { convertStripeAmount } from "../utils/stripeUtils";

export default {
  computed: {
    ...mapState(["lineItems"]),
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
  width: 600px;
}
</style>
