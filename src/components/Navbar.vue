<template>
  <nav
    class="fixed top-0 z-50 flex flex-wrap items-center justify-between w-full px-8 py-6 mt-8 bg-white border-b border-gray-300"
  >
    <!-- LOGO -->
    <img src="/images/logo_small.jpg" alt="99 Medispa Logo" />

    <!-- DESKTOP NAVBAR -->
    <div class="hidden md:block">
      <navbar-link name="Home" exact to="/" />

      <navbar-link-dropdown>
        <template #link>
          <navbar-link name="Treatments" to="/treatments/" disabled />
        </template>
        <template #dropdown>
          <div class="px-4 border border-gray-300">
            <navbar-link
              v-for="(treatment, index) in treatments"
              :key="index"
              class="mt-4"
              :class="{ 'mb-4': index === treatments.length - 1 }"
              dropdown
              exact
              :name="treatment.name"
              :to="treatment.to"
            />
          </div>
        </template>
      </navbar-link-dropdown>

      <navbar-link name="Price List" exact to="/price-list/" />

      <navbar-link-dropdown>
        <template #link>
          <navbar-link name="Offers" to="/offers/" disabled />
        </template>
        <template #dropdown>
          <div class="px-4 border border-gray-300">
            <navbar-link
              class="mt-4"
              dropdown
              exact
              name="Birthday Packages"
              to="/offers/birthday-packages/"
            />
            <navbar-link
              class="my-4"
              dropdown
              exact
              name="VIP Membership"
              to="/offers/vip-membership/"
            />
          </div>
        </template>
      </navbar-link-dropdown>

      <navbar-link name="Products" exact to="products" />
      <navbar-link name="Contact" exact to="/contact/" />
    </div>

    <!-- MOBILE NAVBAR -->
    <div class="block md:hidden">
      <button
        class="flex items-center px-2 py-2 mr-2 rounded-md focus:outline-none hover:bg-gray-200"
        @click="extendNavbar('navbar')"
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

    <div
      :class="{ extendedNavbar }"
      class="block w-full overflow-hidden md:hidden max-h-0 collapsible"
    >
      <g-link :to="'/'" class="block mt-6 border-b border-black">
        Home
      </g-link>

      <g-link
        :to="'/treatments/'"
        event=""
        class="block mt-6 border-b border-black"
        @click.native.prevent="extendNavbar('treatments')"
      >
        Treatments
      </g-link>

      <div
        :class="{ extendedTreatments }"
        class="block w-11/12 overflow-hidden md:hidden max-h-0 collapsible"
      >
        <g-link
          v-for="(treatment, index) in treatments"
          :key="index"
          :to="treatment.to"
          class="block mt-3 ml-2 text-sm border-b border-black"
        >
          {{ treatment.name }}
        </g-link>
      </div>

      <g-link :to="'/price-list/'" class="block mt-6 border-b border-black">
        Price List
      </g-link>

      <g-link
        :to="'/offers/'"
        event=""
        class="block mt-6 border-b border-black"
        @click.native.prevent="extendNavbar('offers')"
      >
        Offers
      </g-link>

      <div
        :class="{ extendedOffers }"
        class="block w-11/12 overflow-hidden md:hidden max-h-0 collapsible"
      >
        <g-link
          :to="'/offers/birthday-packages/'"
          class="block mt-3 ml-2 text-sm border-b border-black"
        >
          Birthday Packages
        </g-link>
        <g-link
          :to="'/offers/vip-membership/'"
          class="block mt-3 ml-2 text-sm border-b border-black"
        >
          VIP Membership
        </g-link>
      </div>

      <g-link :to="'/contact/'" class="block mt-6 border-b border-black">
        Contact
      </g-link>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink";
import NavbarLinkDropdown from "./NavbarLinkDropdown";

export default {
  components: {
    NavbarLink,
    NavbarLinkDropdown,
  },
  data() {
    return {
      extendedNavbar: false,
      extendedTreatments: false,
      extendedOffers: false,
      links: [
        { name: "Price List", to: "/price-list/" },
        { name: "Contact", to: "/contact/" },
      ],
      treatments: [
        {
          name: "Laser Treatment",
          to: "/treatments/laser-treatment/",
        },
        {
          name: "Cosmetic Injection",
          to: "treatments/cosmetic-injection",
        },
        {
          name: "Skin Treatment",
          to: "/treatments/skin-treatment/",
        },
        {
          name: "Body Treatment",
          to: "/treatments/body-treatment/",
        },
        {
          name: "Traditional Medicine",
          to: "/treatments/traditional-chinese-medicine/",
        },
        {
          name: "Plastic Surgery",
          to: "/treatments/plastic-surgery/",
        },
      ],
    };
  },
  watch: {
    $route() {
      this.extendNavbar("close");
    },
  },
  methods: {
    extendNavbar(event) {
      switch (event) {
        case "treatments":
          this.extendedTreatments = !this.extendedTreatments;
          break;
        case "offers":
          this.extendedOffers = !this.extendedOffers;
          break;
        case "navbar":
          this.extendedNavbar = !this.extendedNavbar;
          this.extendedTreatments = false;
          this.extendedOffers = false;
          break;
        case "close":
          this.extendedNavbar = false;
          this.extendedTreatments = false;
          this.extendedOffers = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.collapsible {
  transition: max-height 0.75s ease-in-out;
  &.extendedNavbar,
  &.extendedTreatments,
  &.extendedOffers {
    max-height: 100vh;
  }
}
</style>
