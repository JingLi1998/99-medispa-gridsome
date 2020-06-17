<template>
  <treatment-layout
    :background-node="$page.background.edges[0].node"
    :treatment-query-edges="$page.treatments.edges"
  />
</template>

<page-query>
query {
  treatments: allTreatments(filter: {type: {eq:"Traditional Medicine"}}) {
    edges {
      node {
        title
        image
        content
        altText
      }
    }
  }
  background: allBackgrounds(filter: {title: {eq: "Traditional Chinese Medicine"}}) {
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
import TreatmentLayout from "../../layouts/TreatmentLayout";

export default {
  metaInfo: {
    title: "Traditional Chinese Medicine Sydney",
    meta: [
      {
        name: "description",
        key: "description",
        content:
          "Chinese medicine follows the traditions of yin and yang. Cultivate the body and mind in the most traditional and ancient way.",
      },
    ],
    script: [
      {
        type: "application/ld+json",
        json: [
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Traditional Chinese Medicine",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Balance and Harmony",
            articleBody:
              "Traditional Chinese Medicine (TCM), is an ancient system of healing and health management. Traditional Chinese medicine is a medical system that includes diagnosis, treatment and prevention of disease. Based on the principle of balance and harmony within the body, it is summarized and condensed at a high level and works on: 1. Cyclic；2. Nerve；3. Endocrine；4. Excrete；5. Respiratory；6. Urology",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Traditional Chinese Medicine",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Deep Facial Massage",
            articleBody:
              "At 99 Medispa we specialize in deep facial massages aimed at the elimination of tension and stress in the face. This is achieved through targetting the underlying facial muscles and activating them to replenish your face&#39;s muslce tone, reducing sagginess and wrinkles and flushing out toxins in the blood. The end result is a vibrant, youthful and healthy glow. Please come experience this rejuvenating effect yourself",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Traditional Chinese Medicine",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Aromatherapy Body Massage",
            articleBody:
              "We offer a range of body massages including a traditional full-body aromatherapy massage. This is a specialized deep tissue massage therapy aimed at using essential oils to improve your physical and mental well-being. We invite you to come sample our professional massage services yourself.",
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
