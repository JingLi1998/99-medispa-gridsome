<template>
  <div id="app">
    <!-- <top-navbar @openCart="openCart" @openMap="openMap" />
    <navbar /> -->
    <navbar-desktop @openCart="openCart" @openMap="openMap" />
    <navbar-mobile @openCart="openCart" @openMap="openMap" />
    <transition name="page" appear>
      <router-view v-show="showPage" class="min" />
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

    <delete-product-modal />

    <v-notification />

    <v-facebook-chat />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import "@stripe/stripe-js";

import VFacebookChat from "./components/VFacebookChat";
import FooterBar from "./domain/footer/FooterBar";
import NavbarDesktop from "./domain/navbar/NavbarDesktop";
import NavbarMobile from "./domain/navbar/NavbarMobile";
import ShoppingCart from "./domain/shoppingCart/ShoppingCart";
import MapPanel from "./domain/map/MapPanel";
import VNotification from "./components/VNotification";
import DeleteProductModal from "./domain/checkout/DeleteProductModal";

export default {
  components: {
    NavbarDesktop,
    NavbarMobile,
    VFacebookChat,
    ShoppingCart,
    FooterBar,
    VNotification,
    MapPanel,
    DeleteProductModal,
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
.min {
  min-height: calc(100vh - 320px - 5rem);
}
</style>
