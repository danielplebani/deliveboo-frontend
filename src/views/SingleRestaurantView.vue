<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
import { store } from "../../store.js";

export default {
  name: "SingleRestaurantView",
  data() {
    return {
      store,
      FontAwesomeIcon,
      blog_api: `http://127.0.0.1:8000/api/restaurants/${this.$route.params.slug}`,
      restaurant: {},
      restaurantCall: false,
      aggiungi: 0,
      quantity: 1,
      alert: false,
    };
  },
  methods: {
    getRestoirantView() {
      axios
        .get(this.blog_api)
        .then((response) => {
          console.log("Response from API:", response.data);
          if (response.data.success) {
            this.restaurant = response.data.result;
            this.restaurantCall = true;
            console.log("this.restaurant", this.restaurant);
          } else {
            this.$router.push({ name: "NotFound" });
            console.log("errore");
          }
        })
        .catch((err) => {
          console.error("Error fetching data:", err.message);
        });
    },
    getImageUrl(coverImage) {
      if (coverImage && coverImage.includes("http")) {
        return coverImage;
      } else {
        return "http://127.0.0.1:8000/storage/" + coverImage;
      }
    },
    getCart(dish) {
      if (store.cart[0] !== undefined) {
        console.log(store.cart[0], "TEST CART1");
        if (store.cart[0].restaurant_id !== dish.restaurant_id) {
          console.log(store.cart[0].restaurant_id, "TEST CART1 id");
          this.alert = true;
          return;
        }
      }
      console.log(this.alert);
      const existingDish = store.cart.find(
        (dishCart) => dishCart.id === dish.id
      );
      if (existingDish) {
        existingDish.quantity += 1;
        existingDish.dishTotalPrice = dish.price * existingDish.quantity;
        store.totalPrice = dish.price * existingDish.quantity;
      } else {
        store.cart.push(dish);
        dish["quantity"] = 1;
        dish["dishTotalPrice"] = dish.price * dish.quantity;
        store.totalPrice += dish.price;
      }
      store.saveCartToLocalStorage();
      console.log("store.cart", store.cart);
      console.log("existingDish", existingDish);
      store.saveTotalPrice();
    },
    deleteCart() {
      store.cart = [];
      store.saveCartToLocalStorage();
      store.totalPrice = 0;
      store.saveTotalPrice();
      this.alert = false;
    },
    closeModal() {
      this.alert = false;
    },
  },
  mounted() {
    this.getRestoirantView();
  },
};
</script>

<template>
  <svg id="wave" style="transform: rotate(180deg); transition: 0.3s" viewBox="0 0 1440 100" version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
        <stop stop-color="rgba(247, 184, 1, 1)" offset="0%"></stop>
        <stop stop-color="rgba(255, 189.695, 0, 1)" offset="100%"></stop>
      </linearGradient>
    </defs>
    <path style="transform: translate(0, 0px); opacity: 1" fill="url(#sw-gradient-0)"
      d="M0,40L40,38.3C80,37,160,33,240,41.7C320,50,400,70,480,70C560,70,640,50,720,40C800,30,880,30,960,36.7C1040,43,1120,57,1200,66.7C1280,77,1360,83,1440,85C1520,87,1600,83,1680,68.3C1760,53,1840,27,1920,23.3C2000,20,2080,40,2160,48.3C2240,57,2320,53,2400,55C2480,57,2560,63,2640,60C2720,57,2800,43,2880,41.7C2960,40,3040,50,3120,50C3200,50,3280,40,3360,40C3440,40,3520,50,3600,56.7C3680,63,3760,67,3840,60C3920,53,4000,37,4080,30C4160,23,4240,27,4320,35C4400,43,4480,57,4560,56.7C4640,57,4720,43,4800,35C4880,27,4960,23,5040,20C5120,17,5200,13,5280,13.3C5360,13,5440,17,5520,26.7C5600,37,5680,53,5720,61.7L5760,70L5760,100L5720,100C5680,100,5600,100,5520,100C5440,100,5360,100,5280,100C5200,100,5120,100,5040,100C4960,100,4880,100,4800,100C4720,100,4640,100,4560,100C4480,100,4400,100,4320,100C4240,100,4160,100,4080,100C4000,100,3920,100,3840,100C3760,100,3680,100,3600,100C3520,100,3440,100,3360,100C3280,100,3200,100,3120,100C3040,100,2960,100,2880,100C2800,100,2720,100,2640,100C2560,100,2480,100,2400,100C2320,100,2240,100,2160,100C2080,100,2000,100,1920,100C1840,100,1760,100,1680,100C1600,100,1520,100,1440,100C1360,100,1280,100,1200,100C1120,100,1040,100,960,100C880,100,800,100,720,100C640,100,560,100,480,100C400,100,320,100,240,100C160,100,80,100,40,100L0,100Z">
    </path>
  </svg>

  <div v-if="this.restaurantCall">
    <div class="container mt-5 mt-md-0 py-5">
      <div class="card shadow-lg rounded-5">
        <div class="row g-0">
          <!-- left -->
          <div class="col-md-6">
            <img style="max-height: 400px;" :src="getImageUrl(restaurant.image)" class="img-fluid rounded-start"
              alt="restaurant" />
          </div>
          <!-- right -->
          <div class="col-md-6 align-items-center d-flex">
            <div class="card-body text-center">
              <h2 class="card-title">{{ restaurant.name }}</h2>
              <div>
                <font-awesome-icon icon="fa-solid fa-location-dot" class="pe-1" style="color: #3d348b" />{{
                  restaurant.address }}
              </div>
              <span v-for="typology in restaurant.types" :key="typology.id" class="mx-1">
                <span class="badge text-bg-warning my-3">{{
                  typology.name
                }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="restaurant.dishes.length !== 0">
      <h2 class="text-center mt-5">Il Menù</h2>

      <div class="container mt-5">
        <div class="row custom-row">
          <div class="col-lg-3 col-md-4 col-sm-6 d-flex custom-queries custom-card" v-for="dish in restaurant.dishes">
            <div class="card border-0 shadow-sm flex-fill justify-content-between">
              <div class="row g-0 align-items-center">
                <!-- Aggiunta classe per centrare verticalmente -->
                <div class="col-5 d-flex align-items-center justify-content-center" style="height: 100px">
                  <img :src="getImageUrl(dish.image)" class="img-fluid rounded-3" alt="Immagine"
                    style="max-height: 100%" />
                </div>
                <div class="col-7">
                  <div class="card-body">
                    <h5 class="card-title">{{ dish.name }}</h5>
                    <p class="card-text">{{ dish.price }} €</p>
                  </div>
                </div>

              </div>
              <button class="btn btn-warning text-white text-decoration-none" @click="getCart(dish)">
                <font-awesome-icon icon="fa-solid fa-cart-shopping" /> Aggiungi
                al carrello
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="modal" tabindex="-1" :class="{ show: alert }">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header flex-column">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
              @click="closeModal"></button>
            <img src="../assets/img/cicogna-errore.png" class="img-fluid" />
            <h5 class="modal-title text-warning fst-italic fw-bold fs-3">
              Attenzione!
            </h5>
          </div>
          <div class="modal-body">
            <p class="fs-5">
              Non puoi aggiungere piatti da un altro ristorante! Se vuoi
              procedere devi prima svuotare il carrello.
            </p>
          </div>
          <button type="button" class="btn btn-danger" @click="deleteCart(), closeErrorModal">
            Svuota il carrello
          </button>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <h1>Loading...</h1>
  </div>
</template>

<style scoped>
.modal.show {
  display: block;
}

@media screen and (max-width: 576px) {

  #wave {
    margin-top: 6rem;
  }

  .custom-queries {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .custom-width {
    width: 60%;
  }

  .custom-button {
    display: flex;
    justify-content: center;
    padding-top: 5px;
  }

  .custom-card {
    width: 500px;
  }

  .custom-row {
    justify-content: center;
  }
}
</style>
