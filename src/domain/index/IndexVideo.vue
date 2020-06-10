<template>
  <section class="py-10 bg-pink-100 sm:py-16 md:py-24 lg:py-32 xl:py-40">
    <div class="w-10/12 m-auto sm:w-8/12 md:w-6/12 lg:w-5/12">
      <div class="relative pb-wide">
        <iframe
          class="absolute inset-0 w-full h-full"
          frameborder="0"
          :src="src"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      src: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this.src = "https://www.youtube.com/embed/kL8Bwz63zBo";
    }, 1000);
  },
};
</script>
