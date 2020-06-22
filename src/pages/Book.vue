<template>
  <!-- <default-layout :background-node="$page.background.edges[0].node"> -->
  <!-- </default-layout> -->
  <div class="w-full px-40 mt-20 md:mb-8 md:mt-40">
    <h1 class="text-6xl">Book a Consultation of Treatment</h1>
    <p class="text-3xl">Select Services</p>
    <br />
    <div class="w-3/12 rounded shadow">
      <v-list>
        <template #header>
          <div class="px-2 text-lg">
            Consultation
          </div>
        </template>
        <v-list-item>Hello</v-list-item>
        <v-list-item>World</v-list-item>
      </v-list>
    </div>
  </div>
</template>

<page-query>
query {
    background: allBackgrounds(filter: {title: {eq: "Contact Us"}}) {
    edges {
      node {
        title
        subtitle
        image
        altText
      }
    }
  }
}
</page-query>

<script>
import VList from "../components/VList";
import VListItem from "../components/VListItem";
// import DefaultLayout from "../layouts/DefaultLayout";

export default {
  metaInfo: {
    title: "Make a Booking",
  },
  components: {
    // DefaultLayout,
    VList,
    VListItem,
  },
};
</script>
