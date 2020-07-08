<template>
  <div>
    <h2>{{ type }}</h2>
    <div
      v-for="({ title, treatments }, index1) in prices"
      :key="index1"
      class="mb-9"
    >
      <h3>{{ title }}</h3>
      <div v-for="({ name, price }, index2) in treatments" :key="index2">
        <h4>{{ name }} - {{ price }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    prices: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  @apply text-3xl leading-9 my-6 font-bold text-secondary font-fancy;
}

h3 {
  @apply text-2xl text-gray-700 my-3;
}

h4 {
  @apply my-3;
}
</style>
