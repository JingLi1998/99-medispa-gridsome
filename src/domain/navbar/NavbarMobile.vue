<template>
  <nav
    class="fixed top-0 z-20 flex flex-wrap items-center justify-between block w-full px-2 py-6 bg-white border-b md:hidden"
  >
    <div>
      <v-button
        class="w-8 h-8 bg-black bg-opacity-0 rounded-full opacity-70 hover:bg-opacity-10"
        @click="extendNavbar('navbar')"
      >
        <svg
          class="inline-block w-4 h-4 mb-1 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </v-button>
      <v-button
        class="w-8 h-8 bg-black bg-opacity-0 rounded-full opacity-70 hover:bg-opacity-10"
        @click="$emit('openMap')"
      >
        <font-awesome :icon="['fas', 'map-marker-alt']" />
      </v-button>
    </div>
    <g-image class="h-8" src="/images/logo_small.png" alt="99 Medispa Logo" />
    <div>
      <v-button
        class="inline w-8 h-8 mr-2 bg-black bg-opacity-0 rounded-full opacity-70 hover:bg-opacity-10"
      >
        <g-link :to="'/contact/'">
          <font-awesome :icon="['fas', 'calendar-alt']" />
        </g-link>
      </v-button>

      <v-button
        class="w-8 h-8 bg-black bg-opacity-0 rounded-full opacity-70 hover:bg-opacity-10"
        @click="$emit('openCart')"
      >
        <font-awesome :icon="['fas', 'shopping-bag']" />
      </v-button>
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

      <g-link :to="'/products/'" class="block mt-6 border-b border-black">
        Products
      </g-link>
      <g-link :to="'/contact/'" class="block mt-6 border-b border-black">
        Contact
      </g-link>
    </div>
  </nav>
</template>

<script>
export default {
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

nav {
  min-height: 4rem;
}
</style>
