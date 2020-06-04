// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(faFacebookSquare, faInstagram);

export default function (Vue, { head, router }) {
  head.link.push(
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&amp;display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Courgette&display=swap",
    }
  );
  head.script.push({
    src: "https://connect.facebook.net/en_US/sdk.js",
    defer: true,
    async: true,
  });
  router.addRoutes([{ path: "**", redirect: "/" }]);

  // Set default layout as a global component
  Vue.component("font-awesome", FontAwesomeIcon);
}
