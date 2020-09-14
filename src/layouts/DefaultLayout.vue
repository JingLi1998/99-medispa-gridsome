<template>
  <div id="defaultLayout">
    <navbar-desktop @open-cart="showCart = true" @open-map="showMap = true" />
    <navbar-mobile @open-cart="showCart = true" @open-map="showMap = true" />
    <div class="route-wrapper">
      <slot />
    </div>
    <footer-bar />

    <v-modal transition="slide" :show="showCart" @close="showCart = false">
      <shopping-cart @close-cart="showCart = false" />
    </v-modal>

    <v-modal :show="showMap" @close="showMap = false">
      <iframe
        class="map centered"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13251.018307582943!2d151.205775!3d-33.8702153!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdab6ea0ecb5e72f4!2s99%20Medispa!5e0!3m2!1sen!2sau!4v1591761213204!5m2!1sen!2sau"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </v-modal>
    <v-notification />
    <v-facebook-chat />
  </div>
</template>

<script>
import FooterBar from "../components/FooterBar";
import NavbarDesktop from "../components/NavbarDesktop";
import NavbarMobile from "../components/NavbarMobile";
import VModal from "../components/VModal";
import VNotification from "../components/VNotification";
import VFacebookChat from "../components/VFacebookChat";

import ShoppingCart from "../containers/ShoppingCart";

export default {
  components: {
    FooterBar,
    NavbarDesktop,
    NavbarMobile,
    VModal,
    VNotification,
    ShoppingCart,
    VFacebookChat,
  },
  data() {
    return {
      showCart: false,
      showMap: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.map {
  @apply z-30 h-300;
  width: 80%;
}

.route-wrapper {
  min-height: calc(100vh - 4.5rem);
  margin-top: 4.5rem;
}

@media (min-width: 640px) {
  .map {
    width: 600px;
    height: 450px;
  }
}

@media (min-width: 768px) {
  .route-wrapper {
    min-height: calc(100vh - 8.5rem);
    margin-top: 8.5rem;
  }
}

@media (min-width: 1024px) {
  .map {
    width: 800px;
    height: 600px;
  }
}
</style>
