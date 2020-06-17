<template>
  <nav class="fixed top-0 z-20 hidden w-full bg-white md:block">
    <navbar-desktop-top
      @openCart="$emit('openCart')"
      @openMap="$emit('openMap')"
    />
    <navbar-desktop-main />
  </nav>
</template>

<script>
import NavbarDesktopTop from "./NavbarDesktopTop";
import NavbarDesktopMain from "./NavbarDesktopMain";
export default {
  components: {
    NavbarDesktopTop,
    NavbarDesktopMain,
  },
};
</script>
