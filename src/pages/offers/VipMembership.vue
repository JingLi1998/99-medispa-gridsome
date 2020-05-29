<template>
  <default-layout :background-node="backgroundNode">
    <information-panel
      title="'The Secret Menu'"
      content="As part of our VIP Membership club, you'll have access to some of our best deals and packages. Bonus AquaPeel Facial? Complimentary LED Light Therapy? We'll always have a surprise in store for all our members!  /n"
      image="/images/3deep.jpeg"
      alt-text="Pink flowers"
    />
    <information-panel
      title="Unlimited Treatments"
      content="Every yearly membership gives our customers unlimited access to our vast array of state-of-the-art beauty technologies. No matter your goal, we'll help you maintain your beauty all year round. /n"
      reverse
      image="/images/ad_coolsculpting.jpg"
      alt-text="Pink flowers"
    />
    <information-panel
      title="A Second Home"
      content="We invite our VIP clients to treat our clinic as a second home. Feel free to visit us whenever you are in the Sydney CBD. We are always more than happy to have a chat, and discuss any new skin concerns you might be having! /n"
      image="/images/home.jpg"
      alt-text="Pink flowers"
    />
  </default-layout>
</template>

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
  data() {
    return {
      backgroundNode: {
        title: "VIP Membership",
        subtitle: "Interested in becoming a VIP member?",
        image: "/images/coridoor.jpg",
        altText: "99 Medispa clinic cooridor with glass walling",
      },
    };
  },
};
</script>
