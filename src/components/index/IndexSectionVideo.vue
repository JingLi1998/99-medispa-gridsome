<template>
  <iframe
    class="absolute inset-0 w-full h-full"
    frameborder="0"
    :src="src"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      src: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.src = this.url;
    }, 1000);
  },
};
</script>
