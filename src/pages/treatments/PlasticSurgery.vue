<template>
  <treatment-layout
    :background-node="$page.background.edges[0].node"
    :treatment-query-edges="$page.treatments.edges"
  />
</template>

<page-query>
query {
  treatments: allTreatments(filter: {type: {eq:"Plastic Surgery"}}) {
    edges {
      node {
        title
        image
        content
        altText
      }
    }
  }
  background: allBackgrounds(filter: {title: {eq: "Plastic Surgery"}}) {
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
    title: "Plastic Surgery Sydney",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "If our non-invasive Laser Treatments provided at our clinic don't happen to suit your needs, we also provide a range of plastic surgery options. Our experienced physicians will help you achieve your desired look today!",
      },
    ],
    script: [
      {
        type: "application/ld+json",
        json: [
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Plastic Surgery",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Upper Eyelid Lift",
            articleBody:
              "The loose upper eyelids often sage and hang down under the force of gravity, especially near the edges of the eye. By removing the sagging upper eyelids with double eyelid surgery, it is possible to make the eyes look brighter and more youthful.",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Plastic Surgery",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Lipo Injection",
            articleBody:
              "Lipotropic injections, also called lipo injections, lipotropic MIC injections, or lipotropic B12 injections are a combination of ingredients administered by needle injection to increase fat metabolism and boost wellness. Often used by people trying to lose weight, the shots are generally combined with a program of diet and exercise to produce weight loss.",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Plastic Surgery",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Tear Ditch Lift",
            articleBody:
              "Tear troughs are the grooves that sit between the lower eyelid and the cheeks. They create a hollow at the junction between the lower eyelid and the cheek. In many cases, tear troughs are genetic rather than a result of ageing, and often arise in the early twenties. Tear troughs can be corrected by injecting dermal filler directly under the hollow between the lower eyelid and cheek. This lifts the tear trough up to the level of the lower eyelid and cheek, thus smoothing the appearance of the area. Fillers placed in this area often last for many years. Tear troughs can be corrected by injecting dermal filler directly under the hollow between the lower eyelid and cheek. This lifts the tear trough up to the level of the lower eyelid and cheek, thus smoothing the appearance of the area. Fillers placed in this area often last for many years.",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Plastic Surgery",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Double Eyelid",
            articleBody:
              "Double Eyelid Surgery is designed to reshape the skin above the eye, lifting the upper eyelid and creating a crease. With the eyelid fold created, the eye becomes wider, altering the overall aesthetic appearance of the face",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Plastic Surgery",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Abdominal Liposuction",
            articleBody:
              "Liposuction is a surgical procedure that uses a suction technique to remove fat from specific areas of the body, such as the abdomen, hips, thighs, buttocks, arms or neck. Liposuction also shapes (contours) these areas. Other names for liposuction include lipoplasty and body contouring. Liposuction is used to remove fat from areas of the body that haven&#39;t responded to diet and exercise, such as the: 1. Abdomen；2. Upper arms；3. Buttocks；4. Calves and ankles；5. Chest and back；6. Hips and thighs；7. Chin and neck",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Plastic Surgery",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Dermal Fillers",
            articleBody:
              "Dermal fillers are designed to add volume, lift and symmetry to your face, giving you a refreshed and natural appearance. Dermal fillers are a versatile treatment that can also be used to correct fine lines, smooth deep creases, restore volume and even reshape the chin and jawline. One of the most popular advantages to dermal fillers is that the results are instant – in just 30 minutes, you will be on your way to looking like the best possible version of you.",
          },
          {
            "@context": "http://schema.org",
            "@type": "Article",
            name: "Plastic Surgery",
            author: {
              "@type": "Person",
              name: "99 Medispa",
            },
            articleSection: "Eye Bag Surgery",
            articleBody:
              "Eye bag surgery, also called blepharoplasty of the lower eyelid, is a cosmetic procedure that helps correct lose skin, excess fat, and wrinkles of the lower eye area. As you age, your skin naturally loses elasticity and fat padding. This can make the lower eyelid appear puffy, wrinkled, and baggy. Lower eyelid surgery can make the undereye smoother, creating a more youthful look.",
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
