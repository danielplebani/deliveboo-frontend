<script>
import axios from "axios";
import { store } from "../../store.js";

export default {
  data() {
    return {
      store,
      countdown: 5,
    };
  },
  mounted() {
    const interval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(interval);
        this.$router.push({ name: "Home" });
      }
    }, 1000);
  },
};
</script>
<template>
  <div class="container text-center my-5">
    <img src="../assets/img/logo1.png" class="img-fluid mb-3" />
    <h1 class="mb-4">Il tuo ordine sta per arrivare!</h1>
    <h4>Verrai reindirizzato sulla home page tra {{ countdown }}</h4>
    <img src="../assets/img/cicogna-pagamento.png" class="img-fluid w-25 mb-3" />
    <p class="lead">Il tempo di consegna medio stimato è di circa 45min.</p>
  </div>
</template>

<style scoped>
@media screen and (max-width: 576px) {
  .container {
    padding-top: 7rem;
  }
}
</style>
