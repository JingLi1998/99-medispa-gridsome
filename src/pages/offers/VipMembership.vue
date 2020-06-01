<template>
  <default-layout :background-node="$page.background.edges[0].node">
    <information-panel
      title="'The Secret Menu'"
      content="As part of our VIP Membership club, you'll have access to some of our best deals and packages. Bonus AquaPeel Facial? Complimentary LED Light Therapy? We'll always have a surprise in store for all our members!  /n"
      image="/images/3deep.jpeg"
      alt-text="Endymed 3 Deep Utensils laid against a towel"
    />
    <information-panel
      title="Unlimited Treatments"
      content="Every yearly membership gives our customers unlimited access to our vast array of state-of-the-art beauty technologies. No matter your goal, we'll help you maintain your beauty all year round. /n"
      reverse
      image="/images/ad_coolsculpting.jpg"
      alt-text="Model receiving cool sculpting treatment"
    />
    <information-panel
      title="A Second Home"
      content="We invite our VIP clients to treat our clinic as a second home. Feel free to visit us whenever you are in the Sydney CBD. We are always more than happy to have a chat, and discuss any new skin concerns you might be having! /n"
      image="/images/home.jpg"
      alt-text="Lounge room chairs"
    />
  </default-layout>
</template>

<page-query>
query {
    background: allBackgrounds(filter: {title: {eq: "VIP Membership"}}) {
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
    title: "VIP Membership",
  },
  components: {
    DefaultLayout,
    InformationPanel,
  },
};
</script>
