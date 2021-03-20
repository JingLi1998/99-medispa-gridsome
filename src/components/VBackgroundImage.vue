<template>
  <div class="slideshow-wrapper">
    <g-image
      class="object-cover w-full h-full"
      :immediate="true"
      :src="image"
      quality="0"
      :alt="altText"
    />
    <div class="absolute inset-0 bg-black opacity-40" />
    <div
      class="absolute inset-0 z-10 flex items-center justify-center text-center"
    >
      <div class="box">
        <h1>
          {{ title }}
        </h1>
        <h6>
          {{ subtitle }}
        </h6>
      </div>
    </div>
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

<style lang="postcss" scoped>
h1 {
  @apply text-2xl font-medium my-3;
}

h6 {
  @apply text-sm my-3;
}

.box {
  @apply border-4 border-white p-3 text-white;
  max-width: 80%;
}

.slideshow-wrapper {
  position: relative;
  height: 80vw;
  max-height: 600px;
}

@media (min-width: 640px) {
  h1 {
    @apply text-4xl leading-12 my-6;
  }

  h6 {
    @apply text-base my-6;
  }

  .box {
    @apply p-6;
  }
}

@media (min-width: 768px) {
  h1 {
    @apply text-5xl;
    line-height: 4.5rem;
  }

  h6 {
    @apply text-lg;
  }

  .box {
    @apply p-12;
  }
}

@media (min-width: 1440px) {
  h1 {
    @apply text-6xl;
    line-height: 6rem;
  }

  h6 {
    @apply text-xl;
  }

  .box {
    @apply p-12;
  }
}
</style>
