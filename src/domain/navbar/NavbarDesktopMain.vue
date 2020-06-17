<template>
  <div class="flex items-center justify-between px-8 border-b min-h-24">
    <g-image src="/images/logo_small.jpg" alt="99 Medispa Logo" />
    <div>
      <div class="mr-2">
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
    </div>
  </div>
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
