<template>
  <div class="grid w-8/12 grid-cols-3 mx-auto mt-40 mb-24">
    <div v-for="(edge, index) in productEdges" :key="index">
      <product-list-item
        :product-node="edge.node"
        :in-cart="lineItems.includes(edge.node)"
        @addLineItem="addLineItem(edge.node)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

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
  computed: {
    ...mapState(["lineItems"]),
  },
  methods: {
    ...mapActions(["addLineItem"]),
  },
};
</script>
