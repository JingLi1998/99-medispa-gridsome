<template>
  <div class="flex justify-between">
    <img class="object-contain w-24 h-24" :src="lineItem.images[0]" />
    <div class="flex-grow my-auto">
      <p class="my-auto font-semibold uppercase">
        {{ lineItem.name }}
      </p>
      <p class="my-auto">Quantity: {{ quantity }}</p>
    </div>
    <p class="my-auto mr-10">
      {{ convertStripeAmount(lineItem.amount) }}
    </p>
  </div>
</template>

<script>
import { convertStripeAmount } from "../../utils/stripeUtils";
export default {
  props: {
    lineItem: {
      type: Object,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    convertStripeAmount,
  },
};
</script>
