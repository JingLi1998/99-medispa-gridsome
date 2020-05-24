<template>
  <nav
    class="fixed top-0 z-10 flex flex-wrap items-center justify-between w-full p-6 bg-white"
  >
    <img src="/images/logo_small.png" alt="99 Medispa Logo" />

    <div class="block md:hidden">
      <button
        class="flex items-center px-2 py-2 mr-2 rounded-md focus:outline-none hover:bg-gray-200"
        @click="extendNavbar"
      >
        <svg
          class="w-6 h-6 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>

    <div class="hidden md:block">
      <g-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="inline-block mr-10 text-xs font-medium tracking-widest uppercase"
        exact-active-class="border-b border-black"
      >
        {{ link.name }}
      </g-link>
    </div>

    <div
      :class="{ extended }"
      class="block w-full overflow-hidden md:hidden max-h-0 collapsible"
    >
      <g-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="block mt-6 border-b border-black"
      >
        {{ link.name }}
      </g-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      extended: false,
      links: [
        { name: "Home", to: "/" },
        { name: "Treatments", to: "/treatments" },
        { name: "Contact", to: "/contact" },
      ],
    };
  },
  methods: {
    extendNavbar() {
      this.extended = !this.extended;
    },
  },
};
</script>

<style lang="scss" scoped>
.collapsible {
  transition: max-height 0.75s ease-in-out;
  &.extended {
    max-height: 100vh;
  }
}
</style>
