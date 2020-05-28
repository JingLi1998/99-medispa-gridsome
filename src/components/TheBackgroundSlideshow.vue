<template>
  <div class="h-screen min-h-screen">
    <div class="relative">
      <transition
        v-for="(image, index) in images"
        :key="index"
        name="fade-transition"
        tag="div"
      >
        <g-image
          v-show="index === currentIndex"
          class="object-cover h-screen"
          :immediate="true"
          :src="image"
          quality="0"
        />
      </transition>
    </div>
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
</style>
