// IMPORT FONTAWESOME LIBRARY
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "vue-select/dist/vue-select.css";

import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faShoppingCart,
  faShoppingBag,
  faShoppingBasket,
  faMobileAlt,
  faLocationArrow,
  faMapMarker,
  faMapMarkerAlt,
  faCalendar,
  faCalendarAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFrown,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";

// IMPORT VUEX STORE
import store from "./store";

// IMPORT GLOBAL COMPONENTS
import { Fragment } from "vue-fragment";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VButton from "./components/VButton";

config.autoAddCss = false;
library.add(
  faFacebookSquare,
  faInstagram,
  faShoppingCart,
  faShoppingBag,
  faShoppingBasket,
  faMobileAlt,
  faLocationArrow,
  faMapMarker,
  faMapMarkerAlt,
  faCalendar,
  faArrowLeft,
  faCalendarAlt,
  faFrown,
  faCheckCircle,
  faTimesCircle
);

export default function (Vue, { head, appOptions }) {
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
  // router.addRoutes([
  //   {
  //     path: "/success",
  //     component: Success,
  //     beforeEnter: (to, from, next) => {
  //       console.log(to);
  //       console.log(from);
  //       next();
  //     },
  //   },
  // ]);

  appOptions.store = store;

  Vue.component("fragment", Fragment);
  Vue.component("font-awesome", FontAwesomeIcon);
  Vue.component("v-button", VButton);
}
