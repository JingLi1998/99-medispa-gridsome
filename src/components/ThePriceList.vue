<template>
  <div class="bg-white">
    <div
      class="grid w-10/12 row-gap-8 py-20 mx-auto md:w-8/12 lg:col-gap-20 lg:grid-cols-2 xl:grid-cols-3"
    >
      <price-list-section
        type="Laser Treatment"
        :treatment-edges="priceEdges.laserTreatment"
      />
      <price-list-section
        type="Skin Treatment"
        :treatment-edges="priceEdges.skinTreatment"
      />
      <price-list-section
        type="Body Treatment"
        :treatment-edges="priceEdges.bodyTreatment"
      />
      <price-list-section
        type="Hair Removal"
        :treatment-edges="priceEdges.hairRemoval"
      />
      <price-list-section
        type="Micro Plastic Injection"
        :treatment-edges="priceEdges.microPlasticInjection"
      />
      <price-list-section
        type="Plastic Surgery"
        :treatment-edges="priceEdges.plasticSurgery"
      />
    </div>
  </div>
</template>

<script>
import PriceListSection from "./PriceListSection";

export default {
  components: {
    PriceListSection,
  },
  props: {
    priceEdges: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log(this.priceEdges);
  },
};
</script>
