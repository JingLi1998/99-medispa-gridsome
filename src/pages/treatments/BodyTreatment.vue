<template>
  <treatment-layout
    :background-node="$page.background.edges[0].node"
    :treatment-query-edges="$page.treatments.edges"
  />
</template>

<page-query>
query {
  treatments: allTreatments(filter: {type: {eq:"Body Treatment"}}) {
    edges {
      node {
        title
        image
        content
        altText
      }
    }
  }
  background: allBackgrounds(filter: {title: {eq: "Body Treatment"}}) {
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
    title: "Body Treatment Sydney",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "99 Medispa provides a range of body slimming treatments aimed at helping you achieve your desired figure without invasive methods. We use FDA and TGA approved technologies such as Endymed, CoolSculpting, Ultherapy and more.",
      },
    ],
    script: [
      {
        type: "application/ld+json",
        json: [
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Body Treatment",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Hapro Seecret",
            articleBody:
              "The Hapro Seecret experience allows you to recapture your youth. The secret lies in the skin-rejuvenating effect of the specially tailored light spectrum. Seecret® utilises pure coloured light that penetrates deeply into the skin. The regenerative mechanisms in the skin are given a boost, stimulating the production of collagen and elastin. The proteins are replenished and the skin’s fibre structure is renewed. Every Seecret treatment enables the skin to restore itself and continuously regenerate.",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Body Treatment",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Endymed",
            articleBody:
              "The powerful EndyMed™ platform is a versatile system to help with a broad range of concerns from body contouring, body tightening, facial tightening and fractional skin resurfacing for acne scars and for the treatment of stretch marks and wrinkles.",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Body Treatment",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Coolsculpting",
            articleBody:
              "CoolSculpting is an FDA approved, non-surgical and non-invasive fat removal technique delivering results without the need for surgery. It is a fat reduction treatment that has been proven to effectively remove up to 20% of the treated fat layer with only one treatment.",
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
