<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppHeader from "./AppHeader.vue";

import axios from "axios";
export default {

  components: {
    AppHeader,
  },

  name: "App",
  data() {
    return {
      FontAwesomeIcon,
      url: "http://127.0.0.1:8000",
      url_type: "/api/types",
      url_restourant: "/api/restaurants",
      types: [],
      selectedTypes: [],
      url_restaurant: "/api/restaurants",
      selectedRestaurants: [],
      links: [],
      currentPage: 1,
      maxPages: null,
      first_page_url: null,
      last_page_url: null,
      caricamentoRistoranti: false,
      totalRestaurants: null,
    };
  },
  methods: {
    /**
     * GetType
     *
     * This function gets all restaurant types and adds them into an "copied" array
     *
     */

    fetchTypes() {
      axios
        .get(this.url + this.url_type)
        .then((response) => {
          this.types = response.data.results;
        })
        .catch((err) => {
          console.error(err);
        });
    },

    filterRestaurantsByTypes(url) {
      axios
        .get(url)
        .then((response) => {
          console.log(response, "RESPONSE");
          this.selectedRestaurants = response.data.results.data;
          this.links = response.data.results.links;
          this.maxPages = response.data.results.last_page;
          this.currentPage = response.data.results.current_page;
          this.first_page_url = response.data.results.first_page_url;
          this.last_page_url = response.data.results.last_page_url;
          this.caricamentoRistoranti = true;
          this.totalRestaurants = response.data.results.total;

          //console.log(this.selectedTypes, "SELECTED TYPES");
          //console.log(this.selectedRestaurants, "SELECTED RESTAURANTS");
        })
        .catch((error) => {
          console.error("Error filtering restaurants by types", error);
        });
    },

    getImageUrl(coverImage) {
      if (coverImage && coverImage.includes("http")) {
        return coverImage;
      } else {
        return "http://127.0.0.1:8000/storage/" + coverImage;
      }
    },
  },
  mounted() {
    this.fetchTypes();
  },
};
</script>

<template>
  <AppHeader />

  <main>
    <section>
      <div class="container mt-5">
        <h2 class="text-center">Seleziona il tipo di cucina</h2>

        <div class="row row-cols-1 row-cols-sm-3 row-cols-lg-5 gap-4 justify-content-center pt-4">
          <label class="form-check checkbox_elements bor_color d-flex justify-content-center gap-2 px-5 py-3"
            v-for="typology in this.types" :key="typology.id">
            <input class="form-check-input" type="checkbox" v-model="selectedTypes" :value="typology.id" />
            <span class="hover_effect custom-control-label" :for="typology.slug">
              {{ typology.name }}
            </span>
          </label>
        </div>
        <div class="d-flex justify-content-center pb-5">
          <div class="d-flex justify-content-center pt-5">
            <button class="button_primary" @click="
              filterRestaurantsByTypes(
                this.url +
                `/api/restaurants/types?type_ids=${this.selectedTypes.join(
                  ','
                )}`
              )
              ">
              Carica Risultati
            </button>
          </div>
        </div>

        <div class="container mt-5" v-if="this.selectedRestaurants.length > 0">
          <div class="row justify-content-center">
            <h2 class="text-center">
              I nostri ristoranti ({{ this.totalRestaurants }})
            </h2>
            <div class="col-md-4 d-flex mb-4 mt-4" v-for="restaurant in selectedRestaurants">
              <div class="card flex-fill">
                <img class="card-img-top" :src="getImageUrl(restaurant.image)" alt="Nome Ristorante" />
                <div class="card-body d-flex justify-content-between flex-column">
                  <h3>{{ restaurant.name }}</h3>
                  <p class="card-text">{{ restaurant.description }}</p>
                  <p class="card-text">
                    <font-awesome-icon icon="fa-solid fa-location-dot" style="color: #3d348b" />
                    {{ restaurant.address }}
                  </p>
                  <router-link :to="{
                    name: 'SingleRestaurantView',
                    params: { slug: restaurant.slug },
                  }" class="btn bg-warning text-white text-decoration-none">Vai al ristorante</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex flex-column align-items-center mt-2"
          v-if="this.selectedRestaurants.length === 0 & this.caricamentoRistoranti">
          <span class="fs-4">nessun ristorante trovato</span>
          <i class="fa-regular fa-face-sad-cry fs-3"></i>
        </div>

        <nav aria-label="Page navigation" class="d-flex justify-content-center" v-if="first_page_url !== last_page_url">
          <ul class="pagination">
            <li class="page-item" v-for="link in this.links">
              <a class="page-link text-dark" role="button" aria-label="Previous" v-html="link.label"
                :class="link.active ? 'bg-primary text-white' : ''" @click="filterRestaurantsByTypes(link.url)">
              </a>
            </li>
          </ul>
        </nav>


      </div>
    </section>
  </main>
</template>

<style scoped></style>