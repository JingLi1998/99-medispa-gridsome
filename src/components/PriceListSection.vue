<template>
  <div class="">
    <h1 class="w-10/12 mt-4 text-4xl font-bold text-secondary font-fancy">
      {{ type }}
    </h1>
    <div v-for="(edge, index1) in treatmentEdges" :key="index1" class="mb-4">
      <h2 class="text-2xl text-gray-700">{{ edge.node.title }}</h2>
      <div v-for="(treatment, index2) in edge.node.treatments" :key="index2">
        <p class="mt-2">{{ treatment.name }} - {{ treatment.price }}</p>
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
    treatmentEdges: {
      type: Array,
      required: true,
    },
  },
};
</script>
