<template>
  <div
    class="relative flex flex-col text-center transition transition-shadow duration-100 border border-gray-300 card hover:shadow-lg"
  >
    <div class="mt-1 card-image">
      <g-image
        :src="productNode.images[0]"
        class="object-contain w-full h-full"
      />
    </div>
    <div class="flex flex-col flex-grow h-full py-2 justify-evenly card-items">
      <p>{{ productNode.name }}</p>
      <p>{{ convertStripeAmount(productNode.amount) }}</p>
      <div>
        <v-button
          class="w-32 px-2 py-1 mx-auto mr-1 text-white capitalize bg-secondary hover:bg-opacity-50"
        >
          <g-link :to="`/products/${productNode.slug}/`">
            View Product
          </g-link>
        </v-button>
        <v-button
          :class="{
            'opacity-50 cursor-default': inCart,
            'hover:bg-opacity-50': !inCart,
          }"
          class="w-32 px-2 py-1 mx-auto ml-1 text-white capitalize bg-secondary"
          :disabled="inCart"
          @click="$emit('addLineItem')"
        >
          {{ inCart ? "Added" : "Add to cart" }}
        </v-button>
      </div>
    </div>
  </div>
</template>

<script>
import { convertStripeAmount } from "../../utils/stripeUtils";

export default {
  props: {
    productNode: {
      type: Object,
      required: true,
    },
    inCart: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    convertStripeAmount,
  },
};
</script>

<style scoped>
.card {
  height: 450px;
}
.card-image {
  min-height: 275px;
}
</style>
