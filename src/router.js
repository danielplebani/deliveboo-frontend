// 0.Import the createWebHashHistory and createRouter from vue-router
import { createWebHashHistory, createRouter } from "vue-router";

// 1. Define route components.
import HomeView from "./views/HomeView.vue";
import RestaurantsView from "./views/RestaurantsView.vue";
import SingleRestaurantView from "./views/SingleRestaurantView.vue";
import CartView from "./views/CartView.vue";
import Page404 from "./views/Page404.vue";
import PaymentSuccess from "./views/PaymentSuccess.vue";
import OrderErrorView from "./views/OrderErrorView.vue";

// 2. Define some routes
const routes = [
  { path: "/", name: "Home", component: HomeView },
  {
    path: "/types/:slug+",
    name: "Restaurants",
    component: RestaurantsView,
  },

  {
    path: "/restaurants/:slug",
    name: "SingleRestaurantView",
    component: SingleRestaurantView,
  },
  { path: "/cart", name: "Cart", component: CartView },
  {
    path: "/payment-success",
    name: "payment-success",
    component: PaymentSuccess,
  },
  {
    path: "/order-error",
    name: "order-error",
    component: OrderErrorView,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: Page404 },
];

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes,
});

// export the vue router instance
export { router };
