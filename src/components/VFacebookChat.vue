<template>
  <fragment>
    <!-- Load Facebook SDK for JavaScript -->
    <div id="fb-root"></div>

    <!-- Your Chat Plugin code -->
    <div
      class="fb-customerchat"
      attribution="install_email"
      page_id="330611607561168"
      theme_color="#d4a88c"
    ></div>
  </fragment>
</template>

<script>
export default {
  mounted() {
    window.fbAsyncInit = function () {
      // eslint-disable-next-line
      FB.init({
        xfbml: true,
        version: "v7.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  },
};
</script>
