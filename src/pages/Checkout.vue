<template>
  <div class="px-4 pb-4 mt-20 bg-color">
    <h1 class="text-xl font-semibold uppercase">My Shopping Cart</h1>
    <p v-if="!cartItems.length" class="my-4">Cart is empty</p>
    <v-list v-else>
      <template v-for="({ item, quantity }, index) in cartItems">
        <div :key="item.price" class="mb-2 bg-white">
          <div class="flex items-center justify-around p-2 border-b">
            <g-image class="object-contain w-32 h-32" :src="item.images[0]" />
            <div class="flex-grow">
              <p
                class="mr-2 text-sm font-semibold uppercase sm:text-base sm:mr-0"
              >
                {{ item.name }}
              </p>
              <v-button
                class="w-8 h-8 mr-1 bg-black bg-opacity-0 border hover:bg-opacity-10"
                @click="removeCartItem(index)"
              >
                <font-awesome :icon="['far', 'trash-alt']" />
              </v-button>
            </div>
          </div>
          <div class="flex items-center justify-around py-4">
            <v-select
              :value="quantity"
              class="w-32 quantity"
              :searchable="false"
              :options="[1, 2]"
              @input="
                (e) =>
                  updateCartItem({
                    updateIndex: index,
                    cartItem: { item, quantity: e },
                  })
              "
            ></v-select>
            <p>
              {{ convertStripeAmount(item.amount) }}
            </p>
          </div>
        </div>
      </template>
    </v-list>
    <v-checkout-button />
    <g-link to="/products/">
      <v-button
        class="w-full p-2 mt-2 uppercase bg-white bg-opacity-50 border border-secondary text-secondary"
      >
        Continue shopping
      </v-button>
    </g-link>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import { convertStripeAmount } from "../utils/stripeUtils";
import VList from "../components/VList";
import VButton from "../components/VButton";
import VCheckoutButton from "../components/VCheckoutButton";
import vSelect from "vue-select";

export default {
  components: {
    VButton,
    VList,
    VCheckoutButton,
    vSelect,
  },
  computed: {
    ...mapState("cart", ["cartItems"]),
  },
  methods: {
    ...mapActions("cart", ["updateCartItem", "removeCartItem"]),
    convertStripeAmount,
  },
};
</script>

<style>
.bg-color {
  background-color: rgb(245, 245, 245);
}
.v-select.quantity .vs__selected::before {
  content: "Qty: ";
  white-space: pre;
}
.v-select .vs__clear {
  display: none;
}
</style>
