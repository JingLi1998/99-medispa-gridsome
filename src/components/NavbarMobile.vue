<template>
  <nav>
    <div>
      <v-button @click="extendNavbar('navbar')">
        <svg class="nav" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </v-button>
      <v-button @click="$emit('openMap')">
        <font-awesome :icon="['fas', 'map-marker-alt']" />
      </v-button>
    </div>
    <g-image class="h-8" src="/images/logo_small.png" alt="99 Medispa Logo" />
    <div>
      <v-button class="mr-2">
        <a
          href="https://www.fresha.com/providers/99-medispa-xd1tjw01?pId=364819"
        >
          <font-awesome :icon="['fas', 'calendar-alt']" />
        </a>
      </v-button>
      <v-button @click="$emit('openCart')">
        <font-awesome :icon="['fas', 'shopping-bag']" />
      </v-button>
    </div>
    <v-collapsible :extended="extendedNavbar">
      <template v-for="link in links">
        <g-link
          v-if="!link.children"
          :key="link.name"
          class="nav-link"
          :to="link.to"
        >
          {{ link.name }}
        </g-link>
        <template v-else>
          <g-link
            :key="link.name"
            class="nav-link"
            :to="link.to"
            event=""
            @click.native.prevent="extendNavbar(link.name)"
          >
            {{ link.name }}
          </g-link>
          <v-collapsible
            :key="link.name"
            :extended="
              link.name === 'Treatments' ? extendedTreatments : extendedOffers
            "
          >
            <g-link
              v-for="child in link.children"
              :key="child.to"
              class="mt-3 ml-2 text-sm nav-link"
              :to="child.to"
            >
              {{ child.name }}
            </g-link>
          </v-collapsible>
        </template>
      </template>
    </v-collapsible>
  </nav>
</template>

<script>
import VCollapsible from "../components/VCollapsible";

export default {
  components: {
    VCollapsible,
  },
  data() {
    return {
      extendedNavbar: false,
      extendedTreatments: false,
      extendedOffers: false,
      links: [
        { name: "Home", to: "/", children: null },
        {
          name: "Treatments",
          to: "/treatments/",
          children: [
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
        },
        { name: "Price List", to: "/price-list/", children: null },
        {
          name: "Offers",
          to: "/offers/",
          children: [
            { name: "Birthday Packages", to: "/offers/birthday-packages/" },
            { name: "VIP Membership", to: "/offers/vip-membership/" },
          ],
        },
        { name: "Products", to: "/products/", children: null },
        { name: "Contact", to: "/contact/", children: null },
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
        case "Treatments":
          this.extendedTreatments = !this.extendedTreatments;
          break;
        case "Offers":
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
nav {
  @apply fixed;
  @apply top-0;
  @apply z-20;
  @apply flex;
  @apply flex-wrap;
  @apply items-center;
  @apply justify-between;
  @apply w-full;
  @apply px-2;
  @apply py-6;
  @apply bg-white;
  @apply border-b;
  min-height: 4rem;
}

a.nav-link {
  @apply block;
  @apply mt-6;
  @apply border-b;
  @apply border-black;
}

button {
  @apply w-8;
  @apply h-8;
  @apply bg-black;
  @apply bg-opacity-0;
  @apply rounded-full;
  @apply opacity-70;

  &:hover {
    @apply bg-opacity-10;
  }
}

svg.nav {
  @apply inline-block;
  @apply w-4;
  @apply h-4;
  @apply mb-1;
  @apply fill-current;
}

@media (min-width: 768px) {
  nav {
    @apply hidden;
  }
}
</style>
