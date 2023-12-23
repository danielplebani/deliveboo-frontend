import { reactive } from "vue";

import axios from "axios";

export const store = reactive({
  cart: [],
  savedCart: localStorage.getItem("storageCart"),
  savedTotal: localStorage.getItem("storageTotalPrice"),
  totalPrice: 0,

  /*  Orders user's info */
  username: "",
  address: "",
  user_email: "",
  phone: "",
  notes: "",


  saveCartToLocalStorage() {
    localStorage.setItem("storageCart", JSON.stringify(this.cart));
  },
  saveTotalPrice() {
    localStorage.setItem("storageTotalPrice", JSON.stringify(this.totalPrice));
  },

  created() {
    // Carica il carrello dal localStorage quando il componente viene creato
    if (store.savedCart) {
      store.cart = JSON.parse(store.savedCart);
    }

    // Carica il prezzo totale dal localStorage quando il componente viene creato
    if (store.savedTotal) {
      store.totalPrice = JSON.parse(store.savedTotal);
    }
  },

  beforeDestroy() {
    // Salva il carrello nel localStorage prima che il componente venga distrutto
    store.saveCartToLocalStorage();

    // Salva il prezzo totale nel localStorage prima che il componente venga distrutto
    store.saveTotalPrice();
  },
});
