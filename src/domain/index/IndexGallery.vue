<template>
  <section class="py-10 sm:py-16 md:py-24 lg:py-32 xl:py-40">
    <div class="mb-4 text-center lg:mb-10">
      <h1
        class="text-4xl font-medium leading-tight font-fancy text-secondary md:text-5xl lg:text-6xl"
      >
        Follow Our Journey
      </h1>
      <p class="mx-5 text-sm font-light md:text-base lg:text-lg xl:text-xl">
        Stay up to date with our latest treatments and services by following us
        on Instagram!
      </p>
    </div>

    <iframe
      src="https://cdn.lightwidget.com/widgets/a5bb06a79a9f5550983ceb07e4b7641f.html"
      scrolling="no"
      allowtransparency="true"
      class="w-10/12 mx-auto lightwidget-widget"
      style="width: 100%; border: 0; overflow: hidden;"
    ></iframe>
  </section>
</template>

<script>
export default {
  metaInfo: {
    script: [
      {
        src: "https://cdn.lightwidget.com/widgets/lightwidget.js",
        defer: true,
      },
    ],
  },
};
</script>
