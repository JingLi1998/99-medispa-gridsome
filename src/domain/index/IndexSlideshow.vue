<template>
  <div class="relative h-screen">
    <div
      v-for="(edge, index) in $static.slides.edges"
      :key="index"
      class="absolute w-full h-full"
    >
      <!-- IMAGES -->
      <transition name="slideshow">
        <g-image
          v-show="index === currentIndex"
          class="object-cover w-full h-full"
          :immediate="true"
          :src="edge.node.image"
          quality="0"
          :alt="edge.node.altText"
        />
      </transition>

      <!-- CAPTIONS -->
      <div
        class="absolute inset-0 z-10 flex flex-col justify-center w-10/12 mx-auto mt-20"
      >
        <transition name="fade">
          <div
            v-show="index === currentIndex"
            class="w-full md:w-10/12 xl:w-10/12"
          >
            <h1
              class="text-4xl font-semibold leading-tight text-white uppercase sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl opacity-90"
              v-html="edge.node.title"
            ></h1>
            <p
              class="text-xl font-medium leading-tight text-white sm:text-2xl md:text-3xl opacity-90"
            >
              {{ edge.node.subtitle }}
            </p>
          </div>
        </transition>
      </div>
    </div>

    <!-- OVERLAY -->
    <div class="absolute inset-0 bg-black opacity-30" />

    <!-- navigation menu -->
    <!-- <a class="prev" @click="prev">&#10094; Previous</a> -->
    <!-- <a class="next" @click="next">&#10095; Next</a> -->
  </div>
</template>

<static-query>
query {
   slides: allSlideshow (sortBy: "position", order: ASC) {
    edges{
      node {
				title
        subtitle
        image
        altText
      }
    }
  }
}
</static-query>

<script>
export default {
  data() {
    return {
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
      this.currentIndex < this.$static.slides.edges.length - 1
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
