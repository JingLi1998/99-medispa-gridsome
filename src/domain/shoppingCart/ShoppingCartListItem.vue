<template>
  <v-list-item>
    <g-image class="object-contain w-24 h-24" :src="item.images[0]" />
    <v-list-item-content>
      <p class="mr-2 text-sm font-semibold uppercase sm:text-base sm:mr-0">
        {{ item.name }}
      </p>
      <p>Quantity: {{ quantity }}</p>
    </v-list-item-content>
    <p class="mr-4">
      {{ convertStripeAmount(item.amount) }}
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
    item: {
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
