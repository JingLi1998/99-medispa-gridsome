<template>
  <nav
    class="fixed top-0 flex justify-between w-full h-10 px-8 bg-white border-b border-gray-300 z-60"
  >
    <div class="my-auto text-sm">
      <span class="mr-5">Need to make an enquiry?</span>
      <font-awesome class="mr-2" size="lg" :icon="['fas', 'mobile-alt']" />
      <span>0452 008 115</span>
      <span class="ml-16 mr-2">Visit us today!</span>
      <v-button
        class="w-8 h-8 mr-2 bg-black bg-opacity-0 rounded-full hover:bg-opacity-10"
        @click="$emit('openMap')"
      >
        <font-awesome size="lg" :icon="['fas', 'map-marker-alt']" />
      </v-button>
      <span class="">1304/99 York St Sydney CBD</span>
    </div>
    <div class="my-auto text-sm">
      <span class="mr-2 cursor-default">Book Now</span>
      <v-button
        class="inline w-8 h-8 mr-2 bg-black bg-opacity-0 rounded-full hover:bg-opacity-10"
      >
        <g-link :to="'book'">
          <font-awesome size="lg" :icon="['fas', 'calendar-alt']" />
        </g-link>
      </v-button>
      <span class="mr-2 cursor-default">View Cart</span>
      <v-button
        class="w-8 h-8 bg-black bg-opacity-0 rounded-full hover:bg-opacity-10"
        @click="$emit('openCart')"
      >
        <font-awesome size="lg" :icon="['fas', 'shopping-bag']" />
      </v-button>
    </div>
  </nav>
</template>
