<template>
  <treatment-layout
    :background-node="$page.background.edges[0].node"
    :treatment-query-edges="$page.treatments.edges"
  />
</template>

<page-query>
query {
  treatments: allTreatments(filter: {type: {eq:"Cosmetic Injection"}}) {
    edges {
      node {
        title
        image
        content
        altText
      }
    }
  }
  background: allBackgrounds(filter: {title: {eq: "Cosmetic Injection"}}) {
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
    title: "Cosmetic Injection Sydney",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Our experienced physicians provide a range of popular cosmetic injection treatments including Botox, PRP Tubes and similar dermal fillers to help you achieve your desired state of beauty. Consult with us today to find out which one is best for you.",
      },
    ],
    script: [
      {
        type: "application/ld+json",
        json: [
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Cosmetic Injection",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Protein Thread Lift",
            articleBody:
              "Protein Threads Lift are a relatively new form of non-surgical face lift. If your face has loosening or sagging skin and you want a tighter, fresher more youthful look, this treatment may be suitable. Threads are a special medical grade thread that made of protein. Research has confirmed that Protein Threads relaxes tendon and muscles, whilst a foreign body reaction improves the blood flow to the are stimulating neocollagenesis (the production of new collagen in the skin). It also stimulates elastin and hyaluronic acid, both substances are keys to maintaining firm, youthful looking skin.",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Cosmetic Injection",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Whitening IV Injection",
            articleBody:
              "IV drips of glutathione, a powerhouse antioxidants naturally found in your body. Glutathione contains an abundance of amino acids. This ingredient is extremely safe and does not contain any free radicals or toxins that harm your body or damage your skin.The truth is that this beauty ingredient removes all harmful impurities that are on the skin, making it possible to have a smooth, clear skin. It also helps to quickly reduce the process of increasing pigmentation in the skin and also helps activate enzymes that detoxify the body.",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Cosmetic Injection",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Sculptra Injection",
            articleBody:
              "Sculptra is an injectable cosmetic filler that can be used to restore facial volume lost due to aging or illness. It contains poly-L-lactic acid (PLLA), a biocompatible synthetic substance that stimulates collagen production. It can be used to treat deep lines, creases, and folds to give a more youthful appearance.",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Cosmetic Injection",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Platelet-Rich Plasma",
            articleBody:
              "PRP is the latest hair and skin rejuvenation technology that uses your body’s own cells to rejuvenate the hair, skin. Platelets release growth factors that aid the body to repair itself by stimulating cells to regenerate new tissues. This can be used to rejuvenate the face, including reducing fine-lines caused by sun damage. The treatment is versatile and can be applied across the body and face. It is very safe because your very own plasma is used. At 99 Medispa we offer Factor 4, Swiss Tube and Scalp Care PRP!",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Cosmetic Injection",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Lipolysis Injection",
            articleBody:
              "Lipolysis Injection is a procedure where a substance is injected directly into undesired fat deposits. This active substance is a natural compound made from soybean along with an enzyme for breaking down fat. The body uses these substances especially in the field of fat metabolism.",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Cosmetic Injection",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Dermal Injections",
            articleBody:
              "Here at 99 Medispa we offer a variety of popular dermal injections, including Botox, Xeomin and Juverderm. Unsure of which to choose? No worries, feel free to enquire and we will find the best fit for your needs!",
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
