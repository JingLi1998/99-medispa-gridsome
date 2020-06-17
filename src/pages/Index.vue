<template>
  <div>
    <index-slideshow />
    <index-intro />
    <index-video />
    <index-counter />
    <index-gallery />
    <index-contact />
  </div>
</template>

<script>
import IndexSlideshow from "../domain/index/IndexSlideshow";
import IndexIntro from "../domain/index/IndexIntro";
import IndexVideo from "../domain/index/IndexVideo";
import IndexCounter from "../domain/index/IndexCounter";
import IndexGallery from "../domain/index/IndexGallery";
import IndexContact from "../domain/index/IndexContact";

export default {
  metaInfo: {
    title: "99 Medispa",
    titleTemplate: "%s | Cosmetic Laser Treatment Clinic Australia",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "With over 20 years of experience as a Laser Clinic in Australia, we at 99 Medispa take pride in providing our customers with a range of non-invasive cosmetic treatments. We use only TGA and FDA approved technologies including Picosure, Fotona, Ultherapy, Endymed, AquaPure, Coolsculpting and many more. ",
      },
    ],
    script: [
      {
        type: "application/ld+json",
        json: {
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          name: "99 Medispa",
          image:
            "https://d33wubrfki0l68.cloudfront.net/dcb286b8bfa9f1b1a06a454157eec8d0bd158b9b/f9b04/images/logo_small.jpg",
          telephone: "0452 008 115",
          email: "99medispa.sydney@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1304, 99 York St",
            addressLocality: "Sydney",
            addressRegion: "NSW",
            postalCode: "2000",
          },
        },
      },
    ],
  },
  components: {
    IndexSlideshow,
    IndexIntro,
    IndexVideo,
    IndexCounter,
    IndexGallery,
    IndexContact,
  },
};
</script>
