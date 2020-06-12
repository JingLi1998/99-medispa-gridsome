<template>
  <g-link
    :to="`/products/${productNode.slug}/`"
    class="relative flex flex-col transition transition-shadow duration-100 border-b border-r border-gray-300 card hover:shadow-lg"
  >
    <!-- PRODUCT IMAGE -->
    <div class="mt-1 card-image">
      <g-image
        :src="productNode.images[0]"
        class="object-contain w-full h-full"
      />
    </div>

    <!-- PRODUCT DESCRIPTION -->
    <div class="h-full px-4">
      <p class="my-2 text-sm font-medium uppercase md:mt-8">
        {{ productNode.name }}
      </p>
      <p>{{ convertStripeAmount(productNode.amount) }} AUD</p>
    </div>
  </g-link>
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
  height: 300px;
}
.card-image {
  height: 200px;
}

@media screen and (min-width: 768px) {
  .card {
    height: 350px;
  }
  .card-image {
    height: 250px;
  }
}
@media screen and (min-width: 1024px) {
  .card {
    height: 400px;
  }
  .card-image {
    height: 300px;
  }
}
</style>
