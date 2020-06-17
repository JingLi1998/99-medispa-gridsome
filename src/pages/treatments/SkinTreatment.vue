<template>
  <treatment-layout
    :background-node="$page.background.edges[0].node"
    :treatment-query-edges="$page.treatments.edges"
  />
</template>

<page-query>
query {
  treatments: allTreatments(filter: {type: {eq:"Skin Treatment"}}) {
    edges {
      node {
        title
        image
        content
        altText
      }
    }
  }
  background: allBackgrounds(filter: {title: {eq: "Skin Treatment"}}) {
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
    title: "Skin Treatment Sydney",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "99 Medispa provides numerous skin treatments to help rejuvenate your skin, returning to its youthful state, at an affordable price!",
      },
    ],
    script: [
      {
        type: "application/ld+json",
        json: [
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Skin Treatment",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Ultherapy",
            articleBody:
              "Ultherapy is the latest and most effective cutting-edge technology for non-surgical face-lifting and tightening that requires no ‘downtime’ and surpasses all previous technologies in terms of safety and results",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Skin Treatment",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "4D Speed Lifting",
            articleBody:
              "99 Medispa uses German Fotona equipment, 4D speed lifting to solves the problem of facial skin relaxation. This procedure is quick and effective, making your skin firm and delicate, and reproduces its youthful lustre.",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Skin Treatment",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Endymed",
            articleBody:
              "EndyMed is a cosmetic-care system based on pain-free thermal energy. The technology is FDA-certified and equipped with unique features. It&#39;s superior to other technologies as it is equipped with resistive sensors, motion sensors and thermal sensors for better treatment. It also uses 3Deep monochrome frequency (RF) technology, which helps make the skin firmer, reduce the appearance of wrinkles and cellulite, and stimulate natural collagen production. Combined, it aids skin resurfacing, heals scarring, provides immediate improvement and produces long-term results with only a short duration of treatment.",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Skin Treatment",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "AquaPeel",
            articleBody:
              "Aqua Peel / Hydro Microdermabrasion is the newest advance in non-laser skin resurfacing. It is the only hydradermabrasion equipment combining cleansing, exfoliation, extraction, hydration and antioxidant protection simultaneously, resulting in clearer, more beautiful skin with no discomfort or downtime. The treatment is soothing, moisturizing, non-invasive and non-irritating",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Skin Treatment",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "American Light Stim",
            articleBody:
              "Using LightStim&#39;s top-of-the-line instruments from the United States, we are able to perform LED light therapy to deeply activate collagen in the skin, astringes pores, improves skin radiance, enhances texture, and rejuvenate the skin.",
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
