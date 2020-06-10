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
    title: "Home",
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
