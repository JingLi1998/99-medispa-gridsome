<template>
  <g-link
    :to="`/products/${productNode.slug}/`"
    class="relative flex flex-col transition-shadow duration-100 border-b border-r border-gray-300 card hover:shadow-lg"
  >
    <!-- PRODUCT IMAGE -->
    <div class="mt-1 card-image">
      <g-image
        :src="productNode.images[0]"
        class="object-contain w-full h-full"
      />
    </div>

    <!-- PRODUCT DESCRIPTION -->
    <div
      class="flex flex-col justify-end h-full px-4 pb-4 sm:flex-row sm:justify-between sm:align-bottom"
    >
      <div>
        <p class="my-2 text-sm font-medium uppercase md:mt-8">
          {{ productNode.name }}
        </p>
        <p>{{ convertStripeAmount(productNode.amount) }} AUD</p>
      </div>
      <p
        class="mt-2 text-sm font-light uppercase sm:text-right sm:mt-10 md:mt-16"
      >
        Filorga FillMed
      </p>
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
  width: 75px;
  height: 150px;
  margin: 0 auto;
}

@media screen and (min-width: 640px) {
  .card-image {
    height: 220px;
    width: 110px;
  }
}

@media screen and (min-width: 768px) {
  .card {
    height: 350px;
  }
  .card-image {
    height: 220px;
    width: 110px;
  }
}
@media screen and (min-width: 1024px) {
  .card {
    height: 400px;
  }
  .card-image {
    height: 280px;
    width: 140px;
  }
}
</style>
