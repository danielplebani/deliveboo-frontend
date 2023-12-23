<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppHome from '../components/AppHome.vue';
import AppBrands from '../components/AppBrands.vue';
import AppInfo from "../components/AppInfo.vue";

export default {
  name:
    "HomeView",


  data() {
    return {
      FontAwesomeIcon,
    };
  },
  components: {
    AppHome,
    AppBrands,
    AppInfo,
  }
};
</script>

<template>
  <AppHome></AppHome>
  <AppBrands></AppBrands>
  <AppInfo></AppInfo>
</template>
