<template>
  <transition name="page" appear>
    <div id="app">
      <the-navbar />
      <router-view v-cloak />
      <the-footer />
    </div>
  </transition>
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
  // mounted() {
  //   this.showPage();
  // },
  // methods: {
  //   showPage() {
  //     setTimeout(() => {
  //       this.show = true;
  //     }, 500);
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.page-enter-active {
  transition: opacity 0.75s ease-in-out;
}
.page-enter {
  opacity: 0;
}
</style>
