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
};
</script>

<template>
  <nav>
    <div class="top">
      <div>
        <font-awesome class="mr-3" size="lg" :icon="['fas', 'mobile-alt']" />
        <span class="mr-4">0452 008 115</span>
        <v-button class="mr-1" @click="$emit('openMap')">
          <font-awesome size="lg" :icon="['fas', 'map-marker-alt']" />
        </v-button>
        <span>1304 / 99 York St Sydney 2000</span>
      </div>
      <div>
        <span class="mr-1 cursor-default">Book Now</span>
        <v-button class="mr-2 icon">
          <a
            href="https://www.fresha.com/providers/99-medispa-xd1tjw01?pId=364819"
          >
            <font-awesome size="lg" :icon="['fas', 'calendar-alt']" />
          </a>
        </v-button>
        <span class="mr-1 cursor-default">View Cart</span>
        <v-button @click="$emit('openCart')">
          <font-awesome size="lg" :icon="['fas', 'shopping-bag']" />
        </v-button>
      </div>
    </div>
    <div class="main">
      <g-image src="/images/logo_small.jpg" alt="99 Medispa Logo" />
      <div>
        <template v-for="link in links">
          <navbar-link
            v-if="!link.children"
            :key="link.to"
            :name="link.name"
            :to="link.to"
            exact
          />
          <navbar-link-dropdown v-else :key="link.to">
            <template #link>
              <navbar-link :name="link.name" :to="link.to" disabled />
            </template>
            <template #dropdown>
              <div class="dropdown-wrapper">
                <navbar-link
                  v-for="(child, index) in link.children"
                  :key="index"
                  class="mt-4"
                  :class="{ 'mb-4': index === link.children.length - 1 }"
                  dropdown
                  exact
                  :name="child.name"
                  :to="child.to"
                />
              </div>
            </template>
          </navbar-link-dropdown>
        </template>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  @apply fixed top-0 z-20 bg-white hidden w-full;

  .top {
    @apply h-10 flex items-center justify-between px-9 text-sm border-b;
  }

  .main {
    @apply flex items-center justify-between px-9 border-b min-h-24;
  }
}

.dropdown-wrapper {
  @apply px-4 border border-gray-300;
}

button {
  @apply inline w-8 h-8  bg-black bg-opacity-0 rounded-full;
}

button:hover {
  @apply bg-opacity-10;
}

@media (min-width: 768px) {
  nav {
    @apply block;
  }
}
</style>
