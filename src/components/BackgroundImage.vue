<template>
  <div class="relative h-screen">
    <g-image
      :src="image"
      :alt="altText"
      class="fixed object-cover w-full h-full -z-10"
      :immediate="true"
    />
    <div class="absolute inset-0 flex items-center justify-center">
      <div
        class="z-10 w-10/12 p-10 text-justify bg-white rounded-lg md:text-center md:w-5/12 md:p-12"
      >
        <h1 class="text-5xl font-bold uppercase text-secondary font-fancy">
          {{ title }}
        </h1>
        <p class="text-lg">{{ subtitle }}</p>
      </div>
    </div>
    <div class="absolute inset-0 w-full h-full bg-black opacity-25" />
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
