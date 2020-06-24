<template>
  <v-list-item>
    <g-image class="object-contain w-24 h-24" :src="lineItem.images[0]" />
    <v-list-item-content>
      <p class="mr-2 text-sm font-semibold uppercase sm:text-base sm:mr-0">
        {{ lineItem.name }}
      </p>
      <p>Quantity: {{ quantity }}</p>
    </v-list-item-content>
    <p class="mr-4">
      {{ convertStripeAmount(lineItem.amount) }}
    </p>
  </v-list-item>
</template>

<script>
import { convertStripeAmount } from "../../utils/stripeUtils";

import VListItem from "../../components/VListItem";
import VListItemContent from "../../components/VListItemContent";

export default {
  components: {
    VListItem,
    VListItemContent,
  },
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
