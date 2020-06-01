<template>
  <default-layout :background-node="$page.background.edges[0].node">
    <information-panel
      title="Pamper Up!"
      content="Our Birthday Pamper Packages are the ideal way to celebrate your next big day! Bring up to 5 friends and celebrate your birthday in luxury, style and comfort./n"
      image="/images/pink_flowers.jpg"
      alt-text="Pink flowers"
    />
    <information-panel
      title="Complimentary Treatments"
      content="Every pamper package includes nail and eyelash services. Additionally, each guest gets to choose one 99 Medispa treatment of their choice. Fotona, AquaPeel, Endymed, the choices are endless!/n"
      reverse
      image="/images/spa.jpg"
      alt-text="Spa treatment utensils"
    />
    <information-panel
      title="Satisfy those cravings..."
      content="Grazing boards? Pastries? No matter your preference we'll help you satisfy those cravings. Just let us know your preference and we'll include some of your favourite foods as part of the pamper package!/n"
      image="/images/fruit_platter.jpg"
      alt-text="Grazing board with assorted fruits"
    />
    <information-panel
      title="Girls Night Out?"
      content="Located at the heart of the Sydney CBD next to QVB, 99 Medispa is the ideal place to begin your girl's night out. Spend the afternoon relaxing with our services and indulging in the festivities. When the sun goes down, it'll be prime time to hit your favourite clubs and bars! /n"
      reverse
      image="/images/silver_dress.jpg"
      alt-text="Model in silver dress standing next to birthdya decorations"
    />
  </default-layout>
</template>

<page-query>
query {
    background: allBackgrounds(filter: {title: {eq: "Birthday Pamper Packages"}}) {
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
import DefaultLayout from "../../layouts/DefaultLayout";
import InformationPanel from "../../components/InformationPanel";

export default {
  metaInfo: {
    title: "Birthday Packages",
  },
  components: {
    DefaultLayout,
    InformationPanel,
  },
};
</script>
