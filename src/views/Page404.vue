<script>
export default {
    name: 'Page404'
}
</script>

<template>
    <div class="container my-3">
        <div class="row">
            <div class="col-3 m-auto text-center">
                <h1 class="text-danger">
                    404 Error
                </h1>
                <h3 class="text-uppercase">riprova più tardi</h3>

                <router-link class="btn btn-info text-white my-3 col-6" :to="{ name: 'Home' }">Torna alla Home</router-link>
                <img src="../assets/img/cicogna-errore.png" class="img-fluid">
            </div>
        </div>
    </div>
</template>

<style scoped></style>