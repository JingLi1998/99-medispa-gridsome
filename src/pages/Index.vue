<template>
  <div>
    <the-background-slideshow />

    <!-- INTRODUCTION -->
    <section
      class="flex flex-col items-center py-10 bg-white sm:py-16 md:py-24 lg:py-32 xl:py-40"
    >
      <div class="w-10/12 sm:w-8/12 lg:w-7/12 xl:w-6/12">
        <h1
          class="text-4xl font-medium xl:text-center font-fancy text-secondary md:text-5xl lg:text-6xl"
        >
          {{ title }}
        </h1>
        <p class="text-sm font-light md:text-base lg:text-lg xl:text-xl">
          {{ introText }}
        </p>
      </div>
    </section>

    <!-- YOUTUBE -->
    <section class="py-10 bg-pink-100 sm:py-16 md:py-24 lg:py-32 xl:py-40">
      <div class="w-10/12 m-auto sm:w-8/12 md:w-6/12 lg:w-5/12">
        <div class="relative pb-wide">
          <the-youtube-video url="https://www.youtube.com/embed/kL8Bwz63zBo" />
        </div>
      </div>
    </section>

    <!-- COUNTER -->
    <section id="counter" class="px-4 pt-10 text-white bg-black lg:pt-16">
      <div class="grid grid-cols-1 row-gap-10 text-center md:grid-cols-3">
        <div>
          <p class="text-4xl font-semibold sm:text-5xl">
            {{ targets[0].current }}+
          </p>
          <p class="text-xl sm:text-2xl">Years of Experience</p>
        </div>
        <div>
          <p class="text-4xl font-semibold sm:text-5xl">
            {{ targets[1].current }}
          </p>
          <p class="text-xl sm:text-2xl">VIP Clients*</p>
        </div>
        <div>
          <p class="text-4xl font-semibold sm:text-5xl">
            {{ targets[2].current }}
          </p>
          <p class="mx-12 text-xl sm:mx-2 sm:text-2xl">
            FDA/TGA Approved Machines
          </p>
        </div>
      </div>

      <div class="pt-10 pb-4">
        <p class="text-xs text-center xl:text-sm font-fancy">
          * Contact us to find out more about our special VIP membership plan
        </p>
      </div>
    </section>

    <!-- INSTAGRAM -->
    <section class="py-10 sm:py-16 md:py-24 lg:py-32 xl:py-40">
      <div class="mb-4 text-center lg:mb-10">
        <h1
          class="text-4xl font-medium leading-tight font-fancy text-secondary md:text-5xl lg:text-6xl"
        >
          Follow Our Journey
        </h1>
        <p class="mx-5 text-sm font-light md:text-base lg:text-lg xl:text-xl">
          Stay up to date with our latest treatments and services by following
          us on Instagram!
        </p>
      </div>

      <div class="w-10/12 mx-auto">
        <the-instagram-gallery />
      </div>
    </section>

    <!-- CONSULTATION -->
    <section class="py-10 bg-pink-100 xl:py-24">
      <div class="w-10/12 mx-auto mb-10 lg:mb-16 sm:w-8/12 lg:w-7/12 xl:w-6/12">
        <h1
          class="text-4xl font-medium font-fancy xl:text-center text-secondary md:text-5xl lg:text-6xl"
        >
          Free Consultation
        </h1>
        <p class="text-sm font-light md:text-base lg:text-lg xl:text-xl">
          All customers receive a complimentary consultation with our
          experienced professionals. This allows us to best align the most
          suitable treatments with your personal goals and unique skin and body
          situation. Book a free consultation today and help us help you begin
          your journey towards better health, wellbeing and beauty.
        </p>
      </div>
      <div
        class="flex flex-col justify-center w-10/12 p-3 mx-auto leading-tight text-white gray sm:p-4 sm:flex-row md:py-10 sm:w-8/12"
      >
        <h1
          class="py-1 mx-auto mb-4 text-xl font-medium text-center sm:mb-0 md:text-2xl lg:text-4xl"
        >
          For Bookings and Enquiries
        </h1>
        <g-link
          class="w-auto px-5 py-1 mx-auto text-xl font-medium text-center border-2 border-white rounded md:text-2xl lg:text-4xl"
          :to="'contact'"
        >
          Contact Us
        </g-link>
      </div>
    </section>
  </div>
</template>

<script>
import TheBackgroundSlideshow from "../components/TheBackgroundSlideshow";
import TheYoutubeVideo from "../components/TheYoutubeVideo";
import TheInstagramGallery from "../components/TheInstagramGallery";

export default {
  metaInfo: {
    title: "Home",
    titleTemplate: "%s | Cosmetic Laser Treatment Clinic Australia",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "With over 20 years of experience as a Laser Clinic in Australia, we at 99 Medispa take pride in providing our customers with a range of non-invasive cosmetic treatments. We use only TGA and FDA approved technologies including Picosure, Fotona, Ultherapy, Endymed, AquaPure, Coolsculpting and many more. ",
      },
    ],
    script: [
      {
        type: "application/ld+json",
        json: {
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          name: "99 Medispa",
          image:
            "https://d33wubrfki0l68.cloudfront.net/dcb286b8bfa9f1b1a06a454157eec8d0bd158b9b/f9b04/images/logo_small.jpg",
          telephone: "0452 008 115",
          email: "99medispa.sydney@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1304, 99 York St",
            addressLocality: "Sydney",
            addressRegion: "NSW",
            postalCode: "2000",
          },
        },
      },
    ],
  },
  components: {
    TheBackgroundSlideshow,
    TheYoutubeVideo,
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
