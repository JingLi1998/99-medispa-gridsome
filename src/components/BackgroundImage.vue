<template>
  <div class="relative h-screen">
    <g-image
      :src="image"
      :alt="altText"
      class="fixed object-cover w-full h-full -z-10"
      :immediate="true"
    />
    <div class="absolute inset-0 flex items-center justify-center">
      <!-- <div class="relative flex flex-col p-10 text-center">
        <h1 class="z-30 text-5xl font-bold uppercase text-secondary font-fancy">
          {{ title }}
        </h1>
        <p class="z-30 text-lg">{{ subtitle }}</p>
        <div
          class="absolute inset-0 z-20 w-full h-full bg-white rounded-lg"
          style="opacity: 90%;"
        ></div>
      </div> -->

      <div
        class="relative flex flex-col w-11/12 p-2 sm:text-justify md:p-10 md:text-center lg:w-9/12"
      >
        <h1
          class="z-30 text-5xl font-semibold text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl opacity-90"
        >
          {{ title }}
        </h1>
        <p class="z-30 text-2xl font-medium text-white opacity-90">
          {{ subtitle }}
        </p>
        <!-- <div
          class="absolute inset-0 z-20 w-full h-full bg-white rounded-lg"
          style="opacity: 90%;"
        ></div> -->
      </div>

      <!-- <div
        class="z-10 w-10/12 p-10 text-justify bg-white rounded-lg md:text-center md:w-5/12 md:p-12"
      >
        <h1 class="text-5xl font-bold uppercase text-secondary font-fancy">
          {{ title }}
        </h1>
        <p class="text-lg">{{ subtitle }}</p>
      </div> -->
    </div>
    <div class="absolute inset-0 z-10 w-full h-full bg-black opacity-30" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
  },
};
</script>
