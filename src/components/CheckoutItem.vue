<script>
import { mapActions } from "vuex";

import { convertStripeAmount } from "../utils/stripeUtils";
import vSelect from "vue-select";

export default {
  components: {
    vSelect,
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
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapActions("cart", ["updateCartItem", "setSelectedItemIndex"]),
    convertStripeAmount,
  },
};
</script>

<template>
  <div class="bg-white">
    <div class="p-3 border-b sm:flex">
      <div class="flex flex-grow">
        <g-image :src="item.images[0]" />
        <div class="flex-grow">
          <p class="item-name">{{ item.name }}</p>
          <p>Brand: {{ item.metadata.brand }}</p>
          <p>Size: {{ item.metadata.size }}</p>
          <v-button class="button-delete" @click="setSelectedItemIndex(index)">
            <font-awesome :icon="['far', 'trash-alt']" />
          </v-button>
        </div>
      </div>
      <div class="item-summary">
        <v-select
          :value="quantity"
          class="w-32 quantity md:mr-16"
          :searchable="false"
          :options="[1, 2, 3, 4, 5]"
          @input="
            (e) =>
              updateCartItem({
                updateIndex: index,
                cartItem: { item, quantity: e },
              })
          "
        />
        <p class="md:text-xl">
          {{ convertStripeAmount((Number(item.amount) * quantity).toString()) }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
img {
  @apply object-contain w-16 h-32 ml-4 mr-8;
}

.item-summary {
  @apply flex items-center justify-between px-2 py-4;
}

.button-delete {
  @apply w-8 h-8 mt-2 mr-1 bg-black bg-opacity-0 border;
}

.button-delete:hover {
  @apply bg-opacity-10;
}

.item-name {
  @apply mr-2 text-sm font-semibold uppercase;
}

@media (min-width: 640px) {
  @apply text-base mr-0;
}
</style>
