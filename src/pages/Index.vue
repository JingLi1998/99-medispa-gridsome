<template>
  <div>
    <background-slideshow />

    <section class="flex flex-col items-center py-48 bg-white">
      <div class="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12">
        <h1
          class="mb-4 text-6xl font-medium text-center font-fancy text-secondary"
        >
          {{ title }}
        </h1>
        <p class="px-10 text-xl font-light text-justify">
          {{ introText }}
        </p>
      </div>
    </section>

    <section class="py-48 bg-pink-100">
      <div class="w-10/12 m-auto sm:w-8/12 md:w-6/12 lg:w-5/12">
        <div class="relative pb-wide">
          <index-section-video
            url="https://www.youtube.com/embed/kL8Bwz63zBo"
          />
        </div>
      </div>
    </section>

    <section id="counter" class="px-4 pt-16 text-white bg-black">
      <div class="grid grid-cols-1 row-gap-24 text-center md:grid-cols-3">
        <div>
          <p class="text-5xl font-semibold">{{ targets[0].current }}+</p>
          <p class="text-2xl">Years of Experience</p>
        </div>
        <div>
          <p class="text-5xl font-semibold">
            {{ targets[1].current }}
          </p>
          <p class="text-2xl">VIP Clients*</p>
        </div>
        <div>
          <p class="text-5xl font-semibold">
            {{ targets[2].current }}
          </p>
          <p class="text-2xl">FDA TGA Approved Machines</p>
        </div>
      </div>

      <div class="pt-10 pb-4">
        <p class="text-sm text-center font-fancy">
          * Contact us to find out more about our special VIP membership plan
        </p>
      </div>
    </section>

    <section class="py-16">
      <h1
        class="mb-4 text-6xl font-medium text-center font-fancy text-secondary"
      >
        Follow Our Journey
      </h1>
      <p class="mb-16 text-center">
        Stay up to date with our latest treatments and services by following us
        on Instagram!
      </p>
      <the-instagram-gallery />
    </section>

    <section class="py-24 text-white bg-pink-100">
      <h1
        class="mb-4 text-6xl font-medium text-center text-secondary font-fancy"
      >
        Complimentary Consultation
      </h1>
      <p class="w-5/12 mx-auto mb-16 text-center text-black">
        Book a free consultation with one of our experienced professionals to
        help us help you decide which treatment options are best suited for your
        unique skin type and beauty goals.
      </p>
      <div class="flex items-center justify-center h-40 mx-auto gray lg:w-8/12">
        <h1 class="mr-8 text-4xl font-semibold">For Bookings and Enquiries</h1>
        <button
          class="px-6 py-2 text-3xl font-medium border-2 border-white rounded-md"
        >
          Contact Us
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import BackgroundSlideshow from "../components/BackgroundSlideshow";
import IndexSectionVideo from "../components/index/IndexSectionVideo";
import TheInstagramGallery from "../components/TheInstagramGallery";

export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    BackgroundSlideshow,
    IndexSectionVideo,
    TheInstagramGallery,
  },
  data() {
    return {
      title: "99 Medispa",
      introText:
        "Here at 99 medispa, our cosmetic doctors have perfected the art of non-surgical cosmetic treatments. For over 18 years we have used the most advanced, state of the art TGA and FDA approved technologies to provide our customers with face and body enhancements. Our unique success lies within our deep understanding of the underlying scientific foundations of each treatment, allowing us to align the best selection of treatments to your unique skin type. We place immense value on the client-doctor relationship and will always strive to bring you the ultimate in anti-aging, body slimming and skin rejuvenation services.",
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
          target: 2369,
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

<style lang="scss" scoped>
.gray {
  background-color: #bababa;
}
</style>
