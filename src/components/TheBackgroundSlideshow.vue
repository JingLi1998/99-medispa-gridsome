<template>
  <div class="relative h-screen">
    <!-- slideshow images -->
    <transition
      v-for="(image, index) in images"
      :key="index"
      name="slideshow"
      tag="div"
    >
      <g-image
        v-show="index === currentIndex"
        class="object-cover w-full h-full"
        :immediate="true"
        :src="image"
        quality="0"
      />
    </transition>

    <!-- slideshow captions -->
    <div
      v-for="(caption, index2) in captions"
      :key="index2"
      class="absolute inset-0 z-30 flex flex-col justify-center w-10/12 mx-auto mt-20"
    >
      <transition name="fade">
        <div
          v-show="index2 === currentIndex"
          class="w-full md:w-10/12 xl:w-10/12"
        >
          <h1
            class="z-30 text-4xl font-semibold leading-tight text-white uppercase sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl opacity-90"
            v-html="caption.title"
          ></h1>
          <p
            class="z-30 text-xl font-medium leading-tight text-white sm:text-2xl md:text-3xl opacity-90"
          >
            {{ caption.subtitle }}
          </p>
        </div>
      </transition>
    </div>

    <!-- transparent overlay -->
    <div class="absolute inset-0 z-10 bg-black opacity-30" />

    <!-- navigation menu -->
    <!-- <a class="prev" @click="prev">&#10094; Previous</a> -->
    <!-- <a class="next" @click="next">&#10095; Next</a> -->
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "/images/slideshow1.jpg",
        "/images/slideshow2.jpg",
        "/images/slideshow3.jpg",
        "/images/slideshow4.jpg",
        "/images/slideshow5.jpg",
      ],
      captions: [
        {
          title: "Welcome to 99&nbsp;Medispa",
          subtitle: "Sydney's Pioneer Laser and Beauty Clinic",
        },
        {
          title: "Located in the Sydney CBD",
          subtitle: "Situated right next to Town Hall and the QVB",
        },
        {
          title: "State of the Art Laser Treatments",
          subtitle: "We use only the latest FDA and TGA approved treatments",
        },
        {
          title: "Birthday Pamper Packages",
          subtitle: "Plan your next best birthday with us",
        },
        {
          title: "VIP Membership Available",
          subtitle: "Join our membership club to receive extra benefits",
        },
      ],
      timer: null,
      currentIndex: 0,
    };
  },
  mounted() {
    this.startSlide();
  },
  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 4000);
    },
    next: function () {
      this.currentIndex < this.images.length - 1
        ? (this.currentIndex += 1)
        : (this.currentIndex = 0);
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },
};
</script>

<style lang="scss" scoped>
// .prev,
// .next {
//   cursor: pointer;
//   position: absolute;
//   top: 40%;
//   width: auto;
//   padding: 16px;
//   color: white;
//   font-weight: bold;
//   font-size: 18px;
//   transition: 0.7s ease;
//   border-radius: 0 4px 4px 0;
//   text-decoration: none;
//   user-select: none;
// }

// .next {
//   right: 0;
// }

// .prev {
//   left: 0;
// }

// .prev:hover,
// .next:hover {
//   background-color: rgba(0, 0, 0, 0.9);
// }

.slideshow-enter-active,
.slideshow-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.slideshow-enter,
.slideshow-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
