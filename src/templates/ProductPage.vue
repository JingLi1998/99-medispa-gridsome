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
    <div class="card">
      <h1>{{ $context.name }}</h1>
      <h2>
        {{ $context.metadata.brand }}
      </h2>
      <h5>Size: {{ $context.metadata.size }}</h5>
      <h4>{{ convertStripeAmount($context.amount) }} AUD</h4>
      <v-button
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
      <h2>
        {{ $context.metadata.tagline }}
      </h2>
      <p>{{ $context.metadata.description }}</p>
      <h3>Key Ingredients:</h3>
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

import { convertStripeAmount } from "../utils/stripeUtils";

export default {
  metaInfo() {
    return {
      title: this.$context.name,
      meta: [
        {
          name: "description",
          key: "description",
          content: this.$context.metadata.description,
        },
      ],
    };
  },
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
button {
  @apply w-full py-2 mt-6 text-center text-white bg-secondary;
}
hr {
  @apply my-6;
}

h1 {
  @apply text-2xl my-6 font-bold uppercase leading-9;
}

h2 {
  @apply text-xl my-3 font-medium uppercase;
}

h3 {
  @apply text-xl my-6;
}

h4 {
  @apply my-3 text-xl font-medium;
}

h5 {
  @apply my-3;
}

p {
  @apply my-6;
}

li {
  @apply my-3;
}

.card {
  @apply p-6 border-l;
  min-height: 700px;
}
.image {
  width: 150px;
  height: 300px;
}

@media screen and (min-width: 768px) {
  h1 {
    @apply text-3xl;
  }

  .image {
    width: 200px;
    height: 400px;
  }
}
</style>
