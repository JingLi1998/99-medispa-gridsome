// IMPORT FONTAWESOME LIBRARY
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheckCircle,
  faFrown,
  faTimesCircle,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeft,
  faCalendar,
  faCalendarAlt,
  faLocationArrow,
  faMapMarker,
  faMapMarkerAlt,
  faMobileAlt,
  faShoppingBag,
  faShoppingBasket,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// IMPORT GLOBAL COMPONENTS
import { Fragment } from "vue-fragment";
import "vue-select/dist/vue-select.css";
import "~/assets/main.css";
import VButton from "./components/VButton";
import VResponsive from "./components/VResponsive";
// IMPORT VUEX STORE
import store from "./store";

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
  faTimesCircle,
  faTrashAlt
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
      href:
        "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap",
    },
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap",
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
  Vue.component("v-responsive", VResponsive);
}
