<template>
  <div>
    <div :class="{ 'md:flex-row-reverse': reverse }" class="w-screen md:flex">
      <aspect-ratio class="w-full md:w-1/2">
        <div class="flex flex-col justify-center w-7/12 h-full mx-auto">
          <h1
            class="text-5xl font-bold uppercase font-fancy text-secondary"
            v-html="treatment.title"
          />
          <p class="mt-2 mb-8 text-justify" v-html="treatment.content" />
          <button
            class="w-3/12 py-2 font-normal text-white uppercase rounded-md bg-secondary"
          >
            Enquire Now
          </button>
        </div>
      </aspect-ratio>
      <aspect-ratio class="w-full md:w-1/2">
        <g-image class="object-cover w-full h-full" :src="treatment.image" />
      </aspect-ratio>
    </div>
  </div>
  <!-- <v-row align="center" justify="center">
      <v-col
        :class="{ 'order-lg-2': right }"
        class="px-0 py-md-0 py-9 my-xs-9 my-sm-9"
        lg="6"
        cols="12"
      >
        <v-row align="center" justify="center">
          <v-col cols="8" xl="5">
            <h1
              class="display-2 secondary--text text-uppercase"
              v-text="treatment.name"
            ></h1>
            <p v-html="treatment.description"></p>
            <v-btn
              class="mt-4"
              depressed
              color="secondary"
              to="/contact/#contactForm"
              v-text="`Enquire Now`"
            ></v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col :class="{ 'order-lg-1': right }" class="pa-0" lg="6" cols="12">
        <v-img
          :src="`http://localhost:1337${treatment.image.url}`"
          aspect-ratio="1.4"
          class="grey lighten-2"
        >
          <template #placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5" />
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row> -->
</template>

<script>
import AspectRatio from "./AspectRatio";

export default {
  components: {
    AspectRatio,
  },
  props: {
    treatment: {
      type: Object,
      required: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
