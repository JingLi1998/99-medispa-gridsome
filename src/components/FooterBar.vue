<template>
  <footer
    class="grid grid-cols-1 row-gap-10 px-10 py-10 bg-black md:px-16 lg:py-20 md:grid-cols-2 text-secondary lg:grid-cols-4"
  >
    <section class="flex flex-col items-start justify-start text-sm lg:mx-auto">
      <img class="mb-4" src="/images/logo_small.png" alt="Logo" />
      <p class="mb-4">
        Address: Suite 1304, 99 York St, Sydney, NSW, 2000
      </p>
      <p class="mb-4">
        Wechat: AestheticsMedical888 | Tel: 0452 008 115
      </p>
      <p>Email: 99medispa.sydney@gmail.com</p>
    </section>

    <section
      class="flex flex-col items-start justify-start text-sm md:pl-10 lg:pl-0 lg:mx-auto"
    >
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
    </section>

    <section class="flex flex-col items-start justify-start text-sm lg:mx-auto">
      <h1 class="mb-2 text-2xl">Site Navigation</h1>
      <g-link :to="'/'">Home</g-link>
      <g-link :to="'price-list'">Price List</g-link>
      <g-link :to="'offers/birthday-packages'">Birthday Packages</g-link>
      <g-link :to="'offers/vip-membership'">VIP Membership</g-link>
      <g-link :to="'contact'">Contact Us</g-link>
    </section>

    <section
      class="flex flex-col items-start justify-start pt-3 text-sm md:pl-10 lg:pl-0 lg:mx-auto"
    >
      <g-image src="/images/QR.jpg" class="object-contain w-32" alt="QR Code" />
    </section>
  </footer>
</template>

<style scoped>
footer {
  min-height: 320px;
}
</style>
