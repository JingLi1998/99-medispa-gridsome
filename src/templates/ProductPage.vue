<template>
  <div
    class="w-full mx-auto mt-20 md:mt-32 lg:w-10/12 lg:mt-40 lg:mb-8 md:grid md:grid-cols-2 md:border xl:w-8/12"
  >
    <!-- PRODUCT IMAGE -->
    <div class="relative flex items-center py-10">
      <g-image class="object-contain mx-auto image" :src="$context.images[0]" />
      <div
        class="absolute inset-0 flex w-16 h-16 transition duration-300 bg-black bg-opacity-0 border-b border-r cursor-pointer hover:bg-opacity-10 transition:opacity"
        @click="$router.go(-1)"
      >
        <span class="m-auto text-xl">&larr;</span>
      </div>
    </div>

    <!-- PRODUCT NAME AND PRICE -->
    <div class="px-6 pb-6 border-l card md:py-10">
      <h1 class="mb-4 text-2xl font-bold uppercase md:text-3xl">
        {{ $context.name }}
      </h1>
      <h2 class="text-xl font-medium uppercase">
        {{ $context.metadata.brand }}
      </h2>
      <h2 class="my-2">Size: {{ $context.metadata.size }}</h2>
      <p class="text-xl font-medium">
        {{ convertStripeAmount($context.amount) }} AUD
      </p>
      <!-- <v-select
        v-model="quantity"
        class="w-32 my-2 quantity"
        :searchable="false"
        :options="[1, 2]"
      /> -->
      <v-button
        class="w-full py-2 my-4 text-center text-white bg-secondary"
        :class="{
          'opacity-50 cursor-default': inCart,
          'hover:bg-opacity-50': !inCart,
        }"
        :disabled="inCart"
        @click="addCartItem({ item: $context, quantity })"
      >
        {{ inCart ? "Added To Cart" : "Add To Cart" }}
      </v-button>
      <hr />
      <h2 class="mt-4 text-xl font-medium uppercase">
        {{ $context.metadata.tagline }}
      </h2>
      <p class="mt-4 font-light">{{ $context.metadata.description }}</p>
      <h3 class="mt-4 text-xl">Key Ingredients:</h3>
      <ol>
        <li
          v-for="ingredient in $context.metadata.ingredients.split(',')"
          :key="ingredient"
        >
          - {{ ingredient }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// import vSelect from "vue-select";

import { convertStripeAmount } from "../utils/stripeUtils";

export default {
  metaInfo() {
    return {
      title: this.$context.name,
    };
  },
  // components: {
  //   vSelect,
  // },
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    ...mapGetters("cart", ["isInCart"]),
    inCart() {
      return this.isInCart(this.$context.name);
    },
  },
  methods: {
    ...mapActions("cart", ["addCartItem"]),
    convertStripeAmount,
  },
};
</script>

<style scoped>
.card {
  min-height: 700px;
}
.image {
  width: 150px;
  height: 300px;
}

@media screen and (min-width: 768px) {
  .image {
    width: 200px;
    height: 400px;
  }
}
</style>
