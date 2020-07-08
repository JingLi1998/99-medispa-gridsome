<template>
  <div
    class="w-10/12 py-4 mx-auto mt-20 page md:w-8/12 xl:w-6/12 md:py-20 md:mt-36"
  >
    <h1 class="mb-2 text-xl font-semibold uppercase md:text-3xl">
      My Shopping Cart
    </h1>
    <hr />
    <p v-if="!cartItems.length" class="my-4">Cart is empty</p>
    <v-list v-else>
      <transition-group name="list">
        <template v-for="({ item, quantity }, index) in cartItems">
          <div :key="item.price" class="mb-2 bg-white">
            <div class="p-2 border-b sm:flex">
              <!-- IMAGE AND TITLE -->
              <div class="flex flex-grow">
                <g-image
                  class="object-contain w-16 h-32 ml-4 mr-8"
                  :src="item.images[0]"
                />
                <div class="flex-grow">
                  <p
                    class="mr-2 text-sm font-semibold uppercase sm:text-base sm:mr-0"
                  >
                    {{ item.name }}
                  </p>
                  <p>Brand: {{ item.metadata.brand }}</p>
                  <p>Size: {{ item.metadata.size }}</p>
                  <v-button
                    class="w-8 h-8 mt-2 mr-1 bg-black bg-opacity-0 border hover:bg-opacity-10"
                    @click="setSelectedItemIndex(index)"
                  >
                    <font-awesome :icon="['far', 'trash-alt']" />
                  </v-button>
                </div>
              </div>
              <!-- <div class="px-2 mt-4">
                <p>Brand: {{ item.metadata.brand }}</p>
                <p>Size: {{ item.metadata.size }}</p>
              </div> -->

              <!-- QUANTITY AND PRICE -->
              <div class="flex items-center justify-between px-2 py-4">
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
                  {{
                    convertStripeAmount(
                      (Number(item.amount) * quantity).toString()
                    )
                  }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </transition-group>
    </v-list>
    <div v-if="cartItems.length" class="flex justify-between px-2 my-4 md:px-0">
      <p class="my-auto text-xl font-bold uppercase">Total</p>
      <p class="my-auto text-2xl uppercase md:text-3xl">
        {{ convertStripeAmount(total.toString()) }} AUD
      </p>
    </div>
    <div class="items-center justify-end block md:flex">
      <g-link to="/products/">
        <v-button
          class="w-full p-2 mb-2 mr-2 uppercase bg-white bg-opacity-50 border md:mb-0 md:w-64 border-secondary text-secondary"
        >
          {{ !cartItems.length ? "Start" : "Continue" }} shopping
        </v-button>
      </g-link>
      <v-checkout-button
        v-if="cartItems.length"
        class="border border-secondary md:w-64"
      />
    </div>
    <delete-product-modal />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

import { convertStripeAmount } from "../utils/stripeUtils";
import VList from "../components/VList";
import VButton from "../components/VButton";
import VCheckoutButton from "../components/VCheckoutButton";
import vSelect from "vue-select";
import DeleteProductModal from "../domain/checkout/DeleteProductModal";

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
    VButton,
    VList,
    VCheckoutButton,
    vSelect,
    DeleteProductModal,
  },
  data() {
    return {
      showModal: false,
      selectedItem: null,
      selectedItemIndex: null,
    };
  },
  computed: {
    ...mapState("cart", ["cartItems"]),
    ...mapGetters("cart", ["total"]),
  },
  methods: {
    ...mapActions("cart", ["updateCartItem", "setSelectedItemIndex"]),
    convertStripeAmount,
  },
};
</script>

<style scoped>
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.3s ease;
}
.fade-leave-to,
.fade-enter {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
}

.list-enter {
  opacity: 0;
  transform: translateX(50px) scaleY(0.5);
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0) scaleY(1);
}

.list-leave-active {
  position: absolute;
}

.list-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: center top;
}
</style>
