<template>
  <div id="app">
    <default-layout>
      <transition name="page" appear>
        <router-view />
      </transition>
    </default-layout>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import "@stripe/stripe-js";

import DefaultLayout from "./layouts/DefaultLayout";

export default {
  components: {
    DefaultLayout,
  },
  mounted() {
    this.setStripe();
  },
  methods: {
    ...mapActions(["setStripe"]),
  },
};
</script>
