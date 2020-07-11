<template>
  <div class="slideshow-wrapper">
    <g-image
      class="object-cover w-full h-full"
      :src="$static.slides.edges[1].node.image"
      blur="40"
      :alt="$static.slides.edges[1].node.altText"
    />
    <div class="absolute inset-0 bg-black opacity-30" />
    <div class="absolute inset-0 z-10 flex items-center justify-end">
      <div class="box">
        <h1>
          99 Medispa Sydney
        </h1>
        <h6>
          Elevate your beauty to the next level
        </h6>
      </div>
    </div>
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

<style lang="scss" scoped>
h1 {
  @apply text-2xl font-medium my-3;
}

h6 {
  @apply text-lg my-3;
}

.box {
  @apply border-4 border-white p-3 text-justify text-white;
  margin-right: 10%;
  max-width: 80%;
}

@media (min-width: 640px) {
  h1 {
    @apply text-4xl leading-12 my-6 font-fancy;
  }

  h6 {
    @apply text-2xl leading-9 my-6;
  }

  .box {
    @apply p-6;
  }
}

@media (min-width: 768px) {
  h1 {
    @apply text-5xl;
    line-height: 3rem;
  }

  h6 {
    @apply text-3xl;
  }

  .box {
    @apply p-12;
  }
}

.slideshow-wrapper {
  position: relative;
  height: 80vw;
  max-height: 600px;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: black;
  background-color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  text-decoration: none;
  opacity: 50%;

  &:hover {
    opacity: 100%;
  }
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

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
