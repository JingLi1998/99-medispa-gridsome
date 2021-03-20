<template>
  <v-list-item>
    <g-image :src="item.images[0]" />
    <v-list-item-content>
      <h3>{{ item.name }}</h3>
      <p>Quantity: {{ quantity }}</p>
    </v-list-item-content>
    <p>{{ amount }}</p>
  </v-list-item>
</template>

<script>
import { convertStripeAmount } from "../utils/stripeUtils";

import VListItem from "./VListItem";
import VListItemContent from "./VListItemContent";

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
  computed: {
    amount() {
      return convertStripeAmount(
        (Number(this.item.amount) * this.quantity).toString()
      );
    },
  },
  methods: {
    convertStripeAmount,
  },
};
</script>

<style lang="postcss" scoped>
img {
  @apply object-contain w-12 h-24 ml-3 mr-9;
}
h3 {
  @apply mr-6 font-semibold flex-grow uppercase;
}

@media (min-width: 640px) {
  h3 {
    @apply mr-0;
  }
}
</style>
