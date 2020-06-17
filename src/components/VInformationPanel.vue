<template>
  <fragment>
    <div :class="{ 'lg:flex-row-reverse': reverse }" class="w-full lg:flex">
      <v-aspect-ratio class="w-full lg:w-1/2">
        <div class="w-full h-full bg-white">
          <div
            class="flex flex-col justify-center w-10/12 h-full mx-auto xl:w-7/12"
          >
            <h1
              class="text-xl font-bold uppercase sm:text-4xl font-fancy text-secondary"
              v-html="title"
            />
            <p
              class="text-xs leading-tight sm:leading-normal sm:mt-2 sm:mb-6 sm:text-base"
              v-html="treatmentContent"
            />
            <g-link
              :to="'contact'"
              class="hidden w-40 py-2 font-normal text-center text-white uppercase rounded-lg sm:block focus:outline-none bg-secondary"
            >
              Enquire Now
            </g-link>
          </div>
        </div>
      </v-aspect-ratio>
      <v-aspect-ratio class="w-full lg:w-1/2">
        <g-image
          class="object-cover w-full h-full"
          :src="image"
          :alt="altText"
        />
      </v-aspect-ratio>
    </div>
  </fragment>
</template>

<script>
import VAspectRatio from "./VAspectRatio";

export default {
  components: {
    VAspectRatio,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    treatmentContent() {
      return this.content.slice(0, -2).replace(/(?:\r\n|\r|\n)/g, "<br>");
    },
  },
};
</script>
