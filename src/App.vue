<template>
  <div id="app">
    <layout>
      <transition name="page" appear>
        <div v-show="show">
          <router-view />
          <the-footer />
        </div>
      </transition>
    </layout>
  </div>
</template>

<script>
import TheFooter from "./components/footer/TheFooter";

export default {
  components: {
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
