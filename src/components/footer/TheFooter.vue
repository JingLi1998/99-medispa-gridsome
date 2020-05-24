<template>
  <footer
    class="grid grid-cols-1 row-gap-10 px-10 py-10 bg-black md:px-16 lg:py-20 md:grid-cols-2 text-secondary lg:grid-cols-4"
  >
    <footer-section>
      <img class="mb-4" src="/images/logo_small.png" alt="Logo" />
      <p class="mb-4">
        Address: Suite 1304, 99 York St, Sydney, NSW, 2000
      </p>
      <p class="mb-4">
        Wechat: AestheticsMedical888 | Tel: 0466 698 696
      </p>
      <p>Email: 99medispa.sydney@gmail.com</p>
    </footer-section>

    <footer-section class="md:pl-10 lg:pl-0">
      <h1 class="mb-4 text-2xl">Follow Us</h1>
      <div class="flex">
        <a href="https://www.facebook.com/99medispa/">
          <font-awesome
            size="3x"
            class="mr-4 cursor-pointer"
            :icon="['fab', 'facebook-square']"
          />
        </a>
        <a href="https://www.instagram.com/99medispa/">
          <font-awesome
            size="3x"
            class="cursor-pointer"
            :icon="['fab', 'instagram']"
          />
        </a>
      </div>
    </footer-section>

    <footer-section>
      <h1 class="mb-2 text-2xl">Site Navigation</h1>
      <ul>
        <li>Home</li>
        <li>Laser</li>
        <li>Cosmetic Injectables</li>
        <li>Contact Us</li>
      </ul>
    </footer-section>

    <footer-section class="pt-3 md:pl-10 lg:pl-0">
      <g-image src="/images/QR.png" class="object-contain w-32" alt="QR Code" />
    </footer-section>
  </footer>
</template>

<script>
import FooterSection from "./FooterSection";

export default {
  components: {
    FooterSection,
  },
};
</script>

<style lang="scss" scoped>
footer {
  min-height: 320px;
}
</style>
