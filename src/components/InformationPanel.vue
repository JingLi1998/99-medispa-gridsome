<template>
  <div>
    <div :class="{ 'lg:flex-row-reverse': reverse }" class="w-full lg:flex">
      <aspect-ratio class="w-full lg:w-1/2">
        <div class="w-full h-full bg-white">
          <div
            class="flex flex-col justify-center w-10/12 h-full mx-auto xl:w-7/12"
          >
            <h1
              class="text-5xl font-bold uppercase font-fancy text-secondary"
              v-html="title"
            />
            <p class="my-2 text-justify lg:my-6" v-html="treatmentContent" />
            <button
              class="w-40 py-2 font-normal text-white uppercase rounded-lg bg-secondary"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </aspect-ratio>
      <aspect-ratio class="w-full lg:w-1/2">
        <g-image
          class="object-cover w-full h-full"
          :src="image"
          :alt="altText"
        />
      </aspect-ratio>
    </div>
  </div>
</template>

<script>
import AspectRatio from "./AspectRatio";

export default {
  components: {
    AspectRatio,
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
      return this.content.replace(/(?:\r\n|\r|\n)/g, "<br>");
    },
  },
};
</script>
