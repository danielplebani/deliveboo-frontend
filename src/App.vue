<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppFooter from "./components/AppFooter.vue";

import axios from "axios";

import AppNavbar from "./components/AppNavbar.vue";

import AppBrands from "./components/AppBrands.vue";

export default {
  name: "App",
  data() {
    return {
      FontAwesomeIcon,
    };
  },

  components: {
    AppFooter,
    AppBrands,
    AppNavbar,
  },

  mounted() { },
};
</script>

<template>
  <AppNavbar></AppNavbar>

  <router-view></router-view>

  <AppFooter></AppFooter>
</template>

<style lang="scss" scoped></style>
