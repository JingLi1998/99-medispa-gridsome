<template>
  <treatment-layout
    :background-node="$page.background.edges[0].node"
    :treatment-query-edges="$page.offers.edges"
  />
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
  offers: allOffers (sortBy: "position", order: ASC, filter: {type: {eq:"Birthday Package"}}) {
   edges{
      node {
				title
        content
        position
        image
        altText
      }
    }
  }
}
</page-query>

<script>
import TreatmentLayout from "../../layouts/TreatmentLayout";

export default {
  metaInfo: {
    title: "Birthday Party Packages",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Celebrate your next Birthday Party with one of our Luxury Birthday Packages. Whether it's a girls night out or even a relaxing night in, we'll provide you with an outting to remember. Indulge in food, drinks and complimentary treatments at our Laser Clinic located right in the Sydney CBD Australia!",
      },
    ],
    script: [
      {
        type: "application/ld+json",
        json: [
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Birthday Pamper Packages",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Pamper Up!",
            articleBody:
              "Our Birthday Pamper Packages are the ideal way to celebrate your next big day! Bring up to 5 friends and celebrate your birthday in luxury, style and comfort.",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Birthday Pamper Packages",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Complimentary Treatments",
            articleBody:
              "Every pamper package includes nail and eyelash services. Additionally, each guest gets to choose one 99 Medispa treatment of their choice. Fotona, AquaPeel, Endymed, the choices are endless!",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Birthday Pamper Packages",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Satisfy those cravings..",
            articleBody:
              "Grazing boards? Pastries? No matter your preference we&#39;ll help you satisfy those cravings. Just let us know your preference and we&#39;ll include some of your favourite foods as part of the pamper package!",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Birthday Pamper Packages",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Girls Night Out?",
            articleBody:
              "Located at the heart of the Sydney CBD next to QVB, 99 Medispa is the ideal place to begin your girl&#39;s night out. Spend the afternoon relaxing with our services and indulging in the festivities. When the sun goes down, it&#39;ll be prime time to hit your favourite clubs and bars!",
          },
        ],
      },
    ],
  },
  components: {
    TreatmentLayout,
  },
};
</script>
