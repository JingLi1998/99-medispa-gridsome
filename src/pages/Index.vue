<template>
  <div>
    <background-slideshow />

    <index-section class="flex flex-col items-center bg-white">
      <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12">
        <h1 class="mb-4 text-5xl font-medium text-center text-secondary">
          {{ title }}
        </h1>
        <p class="font-light text-justify">
          {{ introText }}
        </p>
      </div>
    </index-section>

    <index-section class="bg-pink-100">
      <div class="w-10/12 m-auto sm:w-8/12 md:w-6/12">
        <div class="relative pb-wide">
          <iframe
            class="absolute inset-0 w-full h-full"
            frameborder="0"
            src="https://www.youtube.com/embed/kL8Bwz63zBo"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </index-section>

    <index-section id="counter" class="px-4 text-center text-white bg-black">
      <div class="grid grid-cols-1 row-gap-24 md:grid-cols-3">
        <div>
          <p class="text-5xl font-bold">{{ targets[0].current }}+</p>
          <p class="text-2xl">Years of Experience</p>
        </div>
        <div>
          <p class="text-5xl font-bold">
            {{ targets[1].current }}
          </p>
          <p class="text-2xl">VIP Clients</p>
        </div>
        <div>
          <p class="text-5xl font-bold">
            {{ targets[2].current }}
          </p>
          <p class="text-2xl">FDA TGA Approved Machines</p>
        </div>
      </div>
    </index-section>

    <the-instagram-gallery />
  </div>
</template>

<script>
import BackgroundSlideshow from "../components/BackgroundSlideshow";
import IndexSection from "../components/index/IndexSection";
import TheInstagramGallery from "../components/TheInstagramGallery";

export default {
  components: {
    BackgroundSlideshow,
    IndexSection,
    TheInstagramGallery,
  },
  data() {
    return {
      title: "99 Medispa",
      introText:
        " Here at 99 Medispa, our cosmetic doctors have perfected the art of non-surgical cosmetic treatments. For over 18 years we have utilized state-of-the-art TGA and FDA approved clinical technology to provide customers with facial and body enhancements. Our unique success lies within our integration of science-based technologies with timeless Chinese traditional medicine. We strive to bring to you, the customer, the ultimate in anti-ageing, body slimming and skin revitalisation services.",
      observer: null,
      speed: 300,
      targets: [
        {
          current: 0,
          target: 20,
          interval: 50,
        },
        {
          current: 0,
          target: 2500,
          interval: 1,
        },
        {
          current: 0,
          target: 15,
          interval: 60,
        },
      ],
    };
  },
  mounted() {
    // const callback = (entries) => {
    //   if (entries[0].isIntersecting) {
    //     this.startCounter();
    //   }
    // };
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) this.startCounter();
      },
      { threshold: [0.3] }
    );
    this.observer.observe(document.querySelector("#counter"));
  },
  methods: {
    startCounter() {
      this.targets.forEach((target) => {
        const updateCount = () => {
          const inc = Math.ceil(target.target / this.speed);

          // Check if target is reached
          if (target.current < target.target) {
            // Add inc to count and output in counter
            target.current += inc;
            // Call function every ms
            setTimeout(updateCount, target.interval);
          } else {
            target.current = target.target;
          }
        };
        updateCount();
      });
    },
  },
};
</script>
