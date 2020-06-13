<template>
  <treatment-layout
    :background-node="$page.background.edges[0].node"
    :treatment-query-edges="$page.treatments.edges"
  />
</template>

<page-query>
query {
  treatments: allTreatments(filter: {type: {eq:"Laser Treatment"}}) {
    edges {
      node {
        title
        image
        content
        altText
      }
    }
  }
  background: allBackgrounds(filter: {title: {eq: "Laser Treatment"}}) {
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
    title: "Laser Treatment Sydney",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Using the best TGA and FDA approved technologies such as Picosure and Fotona, we at 99 Medispa provide an array of Laser Treatments at our clinic including Laser Hair Removal, Laser Tatoo Removal and reduce pigmentation and acne scars.",
      },
    ],
    script: [
      {
        type: "application/ld+json",
        json: [
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Laser Treatment",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Picosure",
            articleBody:
              "99 Medispa is the first beauty salon in Sydney with a Picosure qualification, utilizing the cutting-edge picosecond technology developed by Cynosure. With their many years of experience, our medical staff are able provide the best picosecond treatment. When used in conjunction with the honeycomb lens treatment, the Picosure can achieve rapid rejuvenation and skin lightening effects.",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Laser Treatment",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Laser Hair Removal",
            articleBody:
              "Laser Hair Removal : Fotona&#39;s high-performance Nd:YAG laser systems with FRAC3® technology have introduced new standards of efficiency in providing safe and effective hair reduction – using an innovative system that effectively targets hair follicles with a combination of selective and homogenous photothermolysis. 99 Medispa offers affordable year-round packages for unlimited hair removal whenever you need it",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Laser Treatment",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection:
              "Fotona is founded in 1964, only four years after the invention of the very first laser, Fotona is one of the most experienced developers of high-technology laser systems, recognized for the design, manufacture, and support of advanced solid-state laser systems for medicine, aesthetics, surgery, gynecology and dentistry. Fotona Laser treats many concerns: laxity, scarring,wrinkles, snoring, and vaginal rejuvenation. The Fotona is a multi-use laser as it has two wavelengths of light, the Nd:YAG and erbium:YAG; thus we can do anything from hair removal to treating veins to skin tightening and everything in between!",
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
