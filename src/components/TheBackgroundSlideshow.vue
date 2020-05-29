<template>
  <div class="h-screen min-h-screen">
    <transition
      v-for="(image, index) in images"
      :key="index"
      name="fade-transition"
      tag="div"
    >
      <g-image
        v-show="index === currentIndex"
        class="object-cover w-full h-screen"
        :immediate="true"
        :src="image"
        quality="0"
      />
    </transition>
    <div
      v-for="(caption, index2) in captions"
      :key="index2"
      class="absolute inset-0 z-30 flex flex-col items-center justify-center h-full p-4 mx-auto md:10/12 lg:w-8/12 sm:text-justify md:p-10 md:text-center"
    >
      <transition name="fade">
        <div v-show="index2 === currentIndex">
          <h1
            class="z-30 text-5xl font-semibold text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl opacity-90"
          >
            {{ caption.title }}
          </h1>
          <p
            class="z-30 text-2xl font-medium text-white sm:text-3xl md:text-4xl opacity-90"
          >
            {{ caption.subtitle }}
          </p>
        </div>
      </transition>
    </div>
    <!-- <div
          class="absolute inset-0 z-20 w-full h-full bg-white rounded-lg"
          style="opacity: 90%;"
        ></div> -->
    <!-- <a class="prev" @click="prev">&#10094; Previous</a> -->
    <!-- <a class="next" @click="next">&#10095; Next</a> -->
    <div class="absolute inset-0 z-10 w-full h-full bg-black opacity-30" />
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
          title: "Welcome to 99 Medispa",
          subtitle: "Sydney's Pioneering Laser and Beauty Clinic",
        },
        {
          title: "Enjoy a peaceful moment in the CBD",
          subtitle: "Take time to relax and unwind with our luxury services",
        },
        {
          title: "Cutting Edge Laser Treatments",
          subtitle: "We use only the latest FDA and TGA approved treatments",
        },
        {
          title: "Birthday Packages Available",
          subtitle: "Plan your next best birthday with us",
        },
        {
          title: "VIP Membership Options",
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

.fade-transition-enter-active,
.fade-transition-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-transition-enter,
.fade-transition-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
