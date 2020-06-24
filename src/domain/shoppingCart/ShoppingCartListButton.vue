<template>
  <g-link to="/checkout/">
    <v-button
      :class="{ 'opacity-50 cursor-default': !checkoutItems.length }"
      class="w-full p-2 mt-6 text-white uppercase rounded bg-secondary"
      :disabled="!checkoutItems.length"
      @click="$emit('closeCart')"
    >
      Checkout Now
    </v-button>
  </g-link>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["checkoutItems"]),
  },
};
</script>
