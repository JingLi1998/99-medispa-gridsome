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
