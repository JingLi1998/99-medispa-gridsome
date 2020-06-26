<template>
  <div
    class="grid w-full grid-cols-2 mx-auto mt-20 border-l border-gray-300 md:mb-8 xl:w-7/12 md:border-t md:mt-40 md:w-11/12 lg:w-8/12 md:grid-cols-3"
  >
    <div v-for="(edge, index) in productEdges" :key="index">
      <product-list-item :product-node="edge.node" />
    </div>
  </div>
</template>

<script>
import ProductListItem from "./ProductListItem";

export default {
  components: {
    ProductListItem,
  },
  props: {
    productEdges: {
      required: true,
      type: Array,
    },
  },
};
</script>
