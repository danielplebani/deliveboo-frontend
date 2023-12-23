import { createApp } from "vue";
import { router } from "./router.js";
import "../src/assets/scss/app.scss";
import App from "./App.vue";
import * as bootstrap from "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faAtlassian,
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

library.add(
  faAtlassian,
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
  faLocationDot,
  faCartShopping
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
