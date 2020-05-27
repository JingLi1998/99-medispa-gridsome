<template>
  <div id="app">
    <the-navbar />
    <transition name="page" appear>
      <div v-show="show">
        <router-view />
        <the-footer />
      </div>
    </transition>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
import TheFooter from "./components/footer/TheFooter";

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
    setTimeout(() => {
      this.show = true;
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
