<template>
  <div class="flex items-center justify-between h-10 px-8 text-sm border-b">
    <div>
      <font-awesome class="mr-3" size="lg" :icon="['fas', 'mobile-alt']" />
      <span class="mr-4">0452 008 115</span>
      <v-button
        class="w-8 h-8 mr-1 bg-black bg-opacity-0 rounded-full hover:bg-opacity-10"
        @click="$emit('openMap')"
      >
        <font-awesome size="lg" :icon="['fas', 'map-marker-alt']" />
      </v-button>
      <span class="">1304/99 York St Sydney 2000</span>
    </div>
    <div>
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
  </div>
</template>
