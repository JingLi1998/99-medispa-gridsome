<template>
  <div class="h-screen min-h-screen">
    <transition-group name="fade-transition" tag="div">
      <div v-for="i in [currentIndex]" :key="i" quality="0">
        <g-image
          class="object-cover h-screen"
          :immediate="true"
          :src="currentImg"
        />
      </div>
    </transition-group>
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
        "/images/slideshow1.webp",
        "/images/slideshow2.webp",
        "/images/slideshow3.webp",
      ],
      timer: null,
      currentIndex: 0,
    };
  },
  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
  mounted: function () {
    this.startSlide();
  },
  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 4000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

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
