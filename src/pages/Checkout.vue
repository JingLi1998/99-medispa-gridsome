<script>
import { mapState, mapGetters } from "vuex";

import { convertStripeAmount } from "../utils/stripeUtils";
import VList from "../components/VList";
import VCheckoutButton from "../components/VCheckoutButton";
import DeleteProductModal from "../domain/checkout/DeleteProductModal";
import CheckoutItem from "../components/CheckoutItem";

export default {
  metaInfo() {
    return {
      title: "Checkout",
      meta: [
        {
          name: "description",
          key: "description",
          content: "Checkout page for 99 Medispa Skincare Products",
        },
      ],
    };
  },
  components: {
    VList,
    VCheckoutButton,
    CheckoutItem,
    DeleteProductModal,
  },
  computed: {
    ...mapState("cart", ["cartItems"]),
    ...mapGetters("cart", ["total"]),
  },
  methods: {
    convertStripeAmount,
  },
};
</script>

<template>
  <v-responsive :cols="10" :md="8" :xl="6" class="mx-auto py-9">
    <h1>My Shopping Cart</h1>
    <hr />
    <v-list>
      <transition-group name="list" mode="in-out">
        <div key="empty-wrapper">
          <transition name="fade" mode="in-out">
            <p v-if="!cartItems.length" class="pb-6 border-b">
              Cart is empty
            </p>
          </transition>
        </div>

        <template v-if="cartItems.length">
          <checkout-item
            v-for="({ item, quantity }, index) in cartItems"
            :key="item.price"
            :item="item"
            :quantity="quantity"
            :index="index"
          />
        </template>
        <div key="cart-total" class="cart-total">
          <p class="cart-total-header">Total</p>
          <p class="cart-total-amount">
            {{ convertStripeAmount(total.toString()) }} AUD
          </p>
        </div>
        <div key="cart-button" class="items-center justify-end block md:flex">
          <g-link to="/products/">
            <v-button class="button-shopping">
              {{ !cartItems.length ? "Start" : "Continue" }} shopping
            </v-button>
          </g-link>
          <v-checkout-button
            v-if="cartItems.length"
            class="border border-secondary md:w-64"
          />
        </div>
      </transition-group>
    </v-list>
    <delete-product-modal />
  </v-responsive>
</template>

<style scoped>
h1 {
  @apply mb-2 text-xl font-semibold uppercase;
}
p {
  @apply my-6;
}
/* md:text-3xl */

.cart-total {
  @apply flex justify-between px-3 py-6;
}

.cart-total-header {
  @apply my-6 text-xl font-bold uppercase;
}

.cart-total-amount {
  @apply my-6 text-2xl uppercase;
}
/* md:text-3xl */
.button-shopping {
  @apply w-full p-2 mb-2 mr-2 uppercase bg-white bg-opacity-50 border border-secondary text-secondary;
}

@media (min-width: 768px) {
  .button-shopping {
    @apply mb-0 w-64;
  }
}

.list-leave-active {
  transition: 0.5s ease-out;
  transition-property: opacity, transform;
  position: absolute;
}

.list-move {
  transition: transform 1s;
}

.list-leave-to {
  opacity: 0;
}

.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.3s ease;
}
.fade-leave-to,
.fade-enter {
  opacity: 0;
}
</style>
