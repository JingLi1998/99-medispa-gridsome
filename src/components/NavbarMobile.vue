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
              name: "Fotona 4D",
              to: "/treatments/fotona/",
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
        {
          name: "Price List",
          to: "https://www.fresha.com/providers/99-medispa-xd1tjw01?pId=364819",
        },
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

<template>
  <nav>
    <div>
      <v-button @click="extendNavbar('navbar')">
        <svg class="nav" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </v-button>
      <v-button @click="$emit('open-map')">
        <font-awesome size="lg" :icon="['fas', 'map-marker-alt']" />
      </v-button>
    </div>
    <g-image
      class="h-12 sm:h-9"
      src="/images/logo_small.png"
      alt="99 Medispa Logo"
    />
    <div>
      <v-button class="mr-2">
        <a
          href="https://www.fresha.com/providers/99-medispa-xd1tjw01?pId=364819"
        >
          <font-awesome size="lg" :icon="['fas', 'calendar-alt']" />
        </a>
      </v-button>
      <v-button @click="$emit('open-cart')">
        <font-awesome size="lg" :icon="['fas', 'shopping-bag']" />
      </v-button>
    </div>
    <v-collapsible class="px-3" :extended="extendedNavbar">
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
            :key="link.to"
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

<style lang="postcss" scoped>
nav {
  @apply fixed top-0 z-20 flex flex-wrap items-center justify-between w-full px-2 py-6 bg-white border-b;
  min-height: 4rem;
}

a.nav-link {
  @apply block mt-6 border-b border-black;
}

button {
  @apply w-12 h-12 bg-black bg-opacity-0 rounded-full opacity-70;
}

button:hover {
  @apply bg-opacity-10;
}

svg.nav {
  @apply inline-block w-5 h-5 mb-1 fill-current;
}

@media (min-width: 640px) {
  button {
    @apply w-9 h-9;
  }
}

@media (min-width: 768px) {
  nav {
    @apply hidden;
  }
}
</style>
