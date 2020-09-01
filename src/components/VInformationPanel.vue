<script>
import VAspectRatio from "./VAspectRatio";

export default {
  components: {
    VAspectRatio,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    treatmentContent() {
      return this.content.slice(0, -2).replace(/(?:\r\n|\r|\n)/g, "<br>");
    },
  },
};
</script>

<template>
  <div :class="{ 'lg:flex-row-reverse': reverse }" class="w-full lg:flex">
    <v-responsive :cols="12" :lg="6">
      <div class="relative bg-white wrapper">
        <div class="absolute inset-0">
          <!-- avoid using v-responsive component as it doesn't work here  -->
          <div
            class="flex flex-col justify-center w-10/12 h-full mx-auto lg:w-8/12"
          >
            <div>
              <h2 v-html="title" />
              <p v-html="treatmentContent" />
              <v-button>
                <g-link to="/contact/">
                  Enquire Now
                </g-link>
              </v-button>
            </div>
          </div>
        </div>
      </div>
    </v-responsive>

    <v-responsive :cols="12" :lg="6">
      <v-aspect-ratio>
        <g-image
          class="object-cover w-full h-full"
          :src="image"
          :alt="altText"
        />
      </v-aspect-ratio>
    </v-responsive>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  @apply text-2xl my-3 font-fancy text-secondary font-semibold uppercase;
}

p {
  @apply my-3;
}

button {
  @apply hidden w-40 py-2 font-normal text-center text-white uppercase bg-secondary;
}

.research {
  color: blue;
}

.wrapper {
  padding-bottom: 150%;
}

@media (min-width: 375px) {
  .wrapper {
    @apply pb-full;
  }
}

@media (min-width: 640px) {
  h2 {
    @apply text-4xl my-6 leading-9;
  }

  p {
    @apply my-6;
  }

  button {
    @apply block;
  }
}

@media (min-width: 1280px) {
  .wrapper {
    @apply pb-7/10;
  }
}
</style>
