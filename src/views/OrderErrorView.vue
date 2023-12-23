<script>
export default {
  name: "OrderErrorView",
};
</script>

<template>
  <div class="container my-3">
    <div class="row">
      <div class="col-3 m-auto text-center">
        <h1 class="text-danger">Errore</h1>
        <h3 class="text-uppercase">Il tuo ordine non è andato a buon fine</h3>

        <router-link
          class="btn btn-info text-white my-3 col-6"
          :to="{ name: 'Cart' }"
          >Torna al Carrello</router-link
        >
        <img src="../assets/img/cicogna-errore.png" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
