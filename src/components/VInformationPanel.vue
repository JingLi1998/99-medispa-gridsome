<template>
  <div :class="{ 'lg:flex-row-reverse': reverse }" class="w-full lg:flex">
    <v-responsive :cols="12" :lg="6">
      <v-aspect-ratio class="bg-white">
        <v-responsive
          :cols="11"
          :lg="10"
          :xl2="8"
          class="flex flex-col justify-center h-full mx-auto"
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
        </v-responsive>
      </v-aspect-ratio>
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

<style lang="scss" scoped>
h2 {
  @apply text-xl my-3 font-fancy text-secondary font-semibold uppercase;
}

p {
  @apply text-sm my-3;
}

button {
  @apply hidden w-40 py-2 font-normal text-center text-white uppercase bg-secondary;
}

@media (min-width: 640px) {
  h2 {
    @apply text-4xl my-6 leading-9;
  }

  p {
    @apply text-base my-6 leading-6;
  }

  button {
    @apply block;
  }
}
</style>
