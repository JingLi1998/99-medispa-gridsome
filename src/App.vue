<template>
  <div id="app">
    <the-navbar />
    <transition name="page" appear>
      <router-view v-show="show" />
    </transition>
    <transition name="page" appear>
      <the-footer v-show="show" />
    </transition>
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
