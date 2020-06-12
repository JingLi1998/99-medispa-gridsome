<template>
  <div id="app">
    <top-navbar @openCart="openCart" @openMap="openMap" />
    <navbar />

    <transition name="page" appear>
      <router-view v-show="showPage" />
    </transition>

    <transition name="page" appear>
      <footer-bar v-show="showPage" />
    </transition>

    <shopping-cart
      :show="showCart"
      class="cursor-pointer"
      @closeCart="closeCart"
    />

    <map-panel :show="showMap" @closeMap="closeMap" />

    <v-notification />

    <facebook-chat />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import "@stripe/stripe-js";

import FacebookChat from "./components/FacebookChat";
import FooterBar from "./components/FooterBar";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";
import ShoppingCart from "./domain/shoppingCart/ShoppingCart";
import MapPanel from "./domain/map/MapPanel";
import VNotification from "./components/VNotification";

export default {
  components: {
    Navbar,
    FacebookChat,
    ShoppingCart,
    FooterBar,
    TopNavbar,
    VNotification,
    MapPanel,
  },
  data() {
    return {
      showPage: false,
      showCart: false,
      showMap: false,
    };
  },
  mounted() {
    this.loadPage();
    this.setStripe();
    document.body.classList.add("scrollbar-hidden");
  },
  methods: {
    ...mapActions(["setStripe"]),
    openMap() {
      this.showMap = true;
    },
    closeMap() {
      this.showMap = false;
    },
    openCart() {
      this.showCart = true;
    },
    closeCart() {
      this.showCart = false;
    },
    loadPage() {
      setTimeout(() => {
        this.showPage = true;
      }, 500);
    },
  },
};
</script>

<style scoped>
.page-enter-active {
  transition: opacity 0.8s ease-in-out;
}
.page-enter {
  opacity: 0;
}
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
.scrollbar-hidden {
  -ms-overflow-style: none;
}
</style>
