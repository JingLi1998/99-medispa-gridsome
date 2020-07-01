<template>
  <v-modal :show="showDeleteModal" @close="hideDeleteModal">
    <div class="z-50 py-4 bg-white w-10-/12 md:w-8/12 xl:w-6/12 centered">
      <div class="mx-8 my-2">
        <h1 class="mb-2 text-xl font-medium uppercase">
          Remove from Cart?
        </h1>
        <hr />
      </div>
      <v-list-item v-if="selectedItem">
        <g-image
          class="object-contain w-12 h-24 ml-4 mr-8"
          :src="selectedItem.item.images[0]"
        />
        <v-list-item-content>
          <p class="mr-3 text-sm font-semibold uppercase sm:text-base sm:mr-0">
            {{ selectedItem.item.name }}
          </p>
          <p>Quantity: {{ selectedItem.quantity }}</p>
        </v-list-item-content>
        <p class="mr-4">
          {{
            convertStripeAmount(
              (
                Number(selectedItem.item.amount) * selectedItem.quantity
              ).toString()
            )
          }}
        </p>
      </v-list-item>
      <hr />
      <div class="flex justify-end mx-8 mt-4">
        <v-button
          class="w-24 p-2 mr-2 border text-grey border-grey bordery"
          @click="hideDeleteModal"
        >
          CANCEL
        </v-button>
        <v-button
          class="w-24 p-2 text-white bg-red-700 border border-red-700"
          @click="removeCartItem(selectedItemIndex)"
        >
          DELETE
        </v-button>
      </div>
    </div>
  </v-modal>
</template>

<script>
import { mapState, mapActions } from "vuex";

import VModal from "../../components/VModal";
import VListItem from "../../components/VListItem";
import VListItemContent from "../../components/VListItemContent";
import { convertStripeAmount } from "../../utils/stripeUtils";

export default {
  components: {
    VModal,
    VListItem,
    VListItemContent,
  },
  computed: {
    ...mapState("cart", [
      "showDeleteModal",
      "selectedItemIndex",
      "selectedItem",
    ]),
  },
  methods: {
    ...mapActions("cart", ["hideDeleteModal", "removeCartItem"]),
    convertStripeAmount,
  },
};
</script>

<style scoped>
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
</style>
