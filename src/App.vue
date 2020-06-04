<template>
  <div id="app">
    <the-navbar />
    <transition name="page" appear>
      <router-view v-show="show" />
    </transition>
    <transition name="page" appear>
      <the-footer v-show="show" />
    </transition>
    <!-- Load Facebook SDK for JavaScript -->
    <div id="fb-root"></div>

    <!-- Your Chat Plugin code -->
    <div
      class="fb-customerchat"
      attribution="setup_tool"
      page_id="330611607561168"
      theme_color="#d4a88c"
    ></div>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
import TheFooter from "./components/TheFooter";

export default {
  components: {
    TheNavbar,
    TheFooter,
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.showPage();
    window.fbAsyncInit = function () {
      // eslint-disable-next-line
      FB.init({
        xfbml: true,
        version: "v7.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  },
  methods: {
    showPage() {
      setTimeout(() => {
        this.show = true;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-enter-active {
  transition: opacity 0.8s ease-in-out;
}
.page-enter {
  opacity: 0;
}
</style>
