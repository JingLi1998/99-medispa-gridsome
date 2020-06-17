<template>
  <div class="relative h-screen">
    <g-image
      :src="image"
      :alt="altText"
      class="fixed object-cover w-full h-full -z-10"
      :immediate="true"
    />
    <div class="absolute inset-0 z-10 flex items-center justify-center">
      <div
        class="absolute inset-0 flex flex-col justify-center w-10/12 mx-auto mt-20"
      >
        <h1
          class="text-4xl font-semibold leading-tight text-white uppercase sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl opacity-90"
        >
          {{ title }}
        </h1>
        <p
          class="text-xl font-medium leading-tight text-white sm:text-2xl md:text-3xl opacity-90"
        >
          {{ subtitle }}
        </p>
      </div>
    </div>
    <div class="absolute inset-0 w-full h-full bg-black opacity-30" />
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
