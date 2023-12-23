<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
import dropin from "braintree-web-drop-in";
import { store } from "../../store.js";
import braintree from "braintree-web";
export default {
  name: "CartView",
  data() {
    return {
      store,
      errors: [],
      success: null,
      loading: false,
    };
  },
  components: {},
  methods: {
    deleteCartDish(dish) {
      const index = store.cart.indexOf(dish);
      if (index !== -1) {
        store.cart.splice(index, 1);
        this.updateTotalPrice();
        store.saveCartToLocalStorage();
      }
    },

    updateQuantity(dish) {
      if (dish && dish.quantity > 0) {
        dish.dishTotalPrice = dish.price * dish.quantity;
        this.updateTotalPrice();
        store.saveCartToLocalStorage();
      }
    },
    updateTotalPrice() {
      store.totalPrice = store.cart.reduce(
        (total, dish) => total + dish.dishTotalPrice,
        0
      );
      store.saveTotalPrice();
    },
    getImageUrl(coverImage) {
      if (coverImage && coverImage.includes("http")) {
        return coverImage;
      } else {
        return "http://127.0.0.1:8000/storage/" + coverImage;
      }
    },
    submitPayment() {
      if (this.dropinInstance != null) {
        const userData = {
          username: store.username,
          user_mail: store.user_email,
          address: store.address,
          phone: store.phone,
          notes: store.notes,
          cart: store.cart,
          total: store.totalPrice,
          restaurant_id: store.cart[0].restaurant_id,
        };
        //console.log(userData, "DATI DA PASSARE AL DB");

        const paymentData = {
          amount: store.totalPrice,
          nonce: null,
        };

        console.log(userData, paymentData, "DATI PRONTI");

        this.dropinInstance.requestPaymentMethod((err, payload) => {
          document.getElementById("nonce").value = payload.nonce;
          paymentData.nonce = payload.nonce;
          console.log(paymentData.nonce);
          if (err) {
            console.error(err);
            return;
          }
          axios
            .post("http://127.0.0.1:8000/api/orders/make/payment", {
              paymentData: paymentData,
            })
            //Inizio chiamata axios per il push degli ordini
            .then((response) => {
              console.log(response);
              if (response.data.success) {
                this.loading = true;
                //chiamata per pushare l'ordine
                console.log(userData, "INFORMAZIONI INVIATE AL DB");
                axios
                  .post("http://127.0.0.1:8000/api/orders/newOrder", userData)
                  .then((response) => {
                    const success = response.data.success;
                    if (success) {
                      console.log(response, "👍");

                      const payload = {
                        username: store.username,
                        address: store.address,
                        user_mail: store.user_email,
                        phone: store.phone,
                        notes: store.notes,
                      };

                      axios
                        .post("http://127.0.0.1:8000/api/mail", payload)
                        .then((response) => {
                          console.log(response, "STO INVIANDO");
                          const mailSuccess = response.data.success;
                          if (!mailSuccess) {
                            console.log(response.data.errors);
                            this.errors = response.data.errors;
                          } else {
                            console.log(response);
                            console.log(response.data.message);

                            store.username = "";
                            store.address = "";
                            store.user_email = "";
                            store.phone = "";
                            store.notes = "";

                            this.success = response.data.message;
                            //Elimini gli elementi dal carrello e dal local storage
                            this.deleteCart();
                            //Pushi la rotta del successo dell'ordine
                            this.$router.push("/payment-success");
                          }
                        });
                    } else {
                      console.log(response);
                      console.log(response.data.errors, "👎");
                      this.errors = response.data.errors;
                    }
                  })
                  .catch((error) => {
                    console.error(error.message);
                  });
              } else {
                this.$router.push("/order-error");
              }
            });
        });
      }
    },
    deleteCart() {
      store.cart = [];
      store.saveCartToLocalStorage();
      store.totalPrice = 0;
      store.saveTotalPrice();
      this.alert = false;
    },

    getAuthToken() {
      axios
        .get("http://127.0.0.1:8000/api/orders/generate")
        .then((response) => {
          if (response.data.success) {
            this.auth = response.data.token;
            //console.log(this.auth);

            dropin.create(
              {
                authorization: this.auth, //  chiave di autorizzazione
                container: "#dropin-container",
              },
              (error, instance) => {
                if (error) {
                  console.error(error);
                  return;
                }

                // Assegna l'istanza di dropin all'oggetto Vue per poterla utilizzare nei metodi
                this.dropinInstance = instance;
              }
            );
          } else {
            console.log("Errore di generazione token");
          }
        })
        .catch((err) => {
          console.error("Error generationg token:", err.message);
        });
    },
  },
  mounted() {
    this.getAuthToken();
  },
};
</script>

<template>
  <section class="bg-light py-5" v-if="!this.loading">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-8 mb-4">
          <!-- Checkout -->
          <form action="" @submit.prevent="submitPayment()">
            <div class="card shadow-0 border">
              <div class="p-4">
                <h5 class="card-title mb-3">Checkout</h5>
                <div class="row">
                  <div class="col-6 mb-3">
                    <p class="mb-0">Nome e cognome</p>
                    <div class="form-outline">
                      <input type="text" id="username" placeholder="Inserisci il tuo nome" class="form-control"
                        v-model="store.username" required />
                    </div>
                  </div>

                  <div class="col-6 mb-3">
                    <p class="mb-0">Telefono</p>
                    <div class="form-outline">
                      <input type="tel" id="phone" value="+39 " class="form-control" v-model="store.phone" />
                    </div>
                  </div>

                  <div class="col-6 mb-3">
                    <p class="mb-0">Email</p>
                    <div class="form-outline">
                      <input type="email" id="user_email" placeholder="example@gmail.com" class="form-control"
                        v-model="store.user_email" />
                    </div>
                  </div>
                </div>

                <hr class="my-4" />

                <div class="row">
                  <div class="col-sm-8 mb-3">
                    <p class="mb-0">Indirizzo</p>
                    <div class="form-outline">
                      <input type="text" id="address" placeholder="Inserisci il tuo indirizzo" class="form-control"
                        v-model="store.address" required />
                    </div>
                  </div>
                </div>

                <div class="mb-3">
                  <p class="mb-0">
                    Note <span class="text-muted fst-italic">(Opzionale)</span>
                  </p>

                  <div class="form-outline">
                    <textarea class="form-control" id="textAreaExample1" rows="2" v-model="store.notes"></textarea>
                  </div>
                </div>

                <div id="dropin-container"></div>
                <button id="submitButton" type="submit" class="btn btn-primary">
                  Acquista
                </button>
                <input type="hidden" id="nonce" name="payment_method_nonce" />

                <div class="float-end">
                  <button class="btn btn-light border">Cancella</button>
                </div>
              </div>
            </div>
          </form>
          <!-- Checkout -->
        </div>
        <div class="col-xl-4 col-lg-4 d-flex justify-content-center justify-content-lg-end">
          <div class="ms-lg-4 mt-4 mt-lg-0" style="max-width: 320px;">
            <h6 class="mb-3">Il tuo ordine</h6>
            <div class="d-flex justify-content-between">
              <p class="mb-2">Prezzo Totale:</p>
              <p class="mb-2">€ {{ store.totalPrice }}</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="mb-2">Costo di spedizione:</p>
              <p class="mb-2">gratis</p>
            </div>
            <hr />

            <h6 class="text-dark my-4">Prodotti nel carrello</h6>

            <div class="d-flex align-items-center mb-4" v-for="cartDish in store.cart">
              <div class="me-3 position-relative">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                  Quan
                </span>
                <img :src="getImageUrl(cartDish.image)" style="height: 96px;" class="img-sm rounded border" />
              </div>
              <div class="">
                <a href="#" class="nav-link">
                  {{ cartDish.name }}
                </a>
                <div class="price text-muted">
                  Prezzo piatto: € {{ cartDish.price }}
                </div>
                <div>
                  <input type="number" class="form-control" v-model="cartDish.quantity" min="0"
                    @input="updateQuantity(cartDish)" />
                </div>
                <div class="d-flex justify-content-between mt-1 align-items-center">
                  <p class="mb-2 fw-bold pt-2">
                    Totale: € {{ cartDish.dishTotalPrice }}
                  </p>
                  <button class="btn btn-danger py-1 px-2" @click="deleteCartDish(cartDish)">
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div style="min-height: 40vh;" class="text-center my-5" v-else>
    <i style="font-size: 8rem;" class="fa-solid fa-circle-notch fa-spin text-muted"></i>
  </div>
</template>


<style scoped>
@media screen and (max-width: 576px) {
  .container {
    padding-top: 8rem;
  }
}
</style>
