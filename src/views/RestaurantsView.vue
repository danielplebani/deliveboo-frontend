<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
export default {
  name: "RestaurantsView",
  data() {
    return {
      url_restourant: `http://127.0.0.1:8000/api${this.$route.path}`,
      selectedRestaurants: [],
      base_url: "http://127.0.0.1:8000/",
    };
  },
  methods: {
    getRestourant(url) {
      axios
        .get(url)
        .then((response) => {
          this.selectedRestaurants = response.data.result.data[0].restaurants;
          console.log("selectedRestaurants:", this.selectedRestaurants);
        })
        .catch((err) => {
          console.error(err);
          this.$router.push({ name: 'Page404' });
        });
    },
    getImageUrl(coverImage) {
      if (coverImage && coverImage.includes("http")) {
        return coverImage;
      } else {
        return "http://127.0.0.1:8000/storage/" + coverImage;
      }
    },
    prevPage(path) {
      console.log("path", path);
      this.getPage(path);
    },
    nextPage(path) {
      console.log("nextPage - path", path);
      this.getPage(path);
    },
  },
  mounted() {
    this.getRestourant(this.url_restourant);
    console.log("this.$route.path:", this.$route.path);
  },
};
</script>

<template>
  <!-- I FANTASTICI MENù -->

  <div class="container my-5">
    <div class="row text-center">
      <router-link to="/cart">CART</router-link>
      <h2>Scopri i nostri fantastici menù</h2>
      <div class="col bg-info p-3">
        <div class="card">
          <img class="card-img-top" src="https://picsum.photos/200/200" alt="Nome del Piatto" />
          <div class="card-body">
            <p class="card-text">Nome del Piatto</p>
          </div>
        </div>
      </div>
      <div class="col bg-info p-3">
        <div class="card">
          <img class="card-img-top" src="https://picsum.photos/200/200" alt="Nome del Piatto" />
          <div class="card-body">
            <p class="card-text">Nome del Piatto</p>
          </div>
        </div>
      </div>
      <div class="col bg-info p-3">
        <div class="card">
          <img class="card-img-top" src="https://picsum.photos/200/200" alt="Nome del Piatto" />
          <div class="card-body">
            <p class="card-text">Nome del Piatto</p>
          </div>
        </div>
      </div>
      <div class="col bg-info p-3">
        <div class="card">
          <img class="card-img-top" src="https://picsum.photos/200/200" alt="Nome del Piatto" />
          <div class="card-body">
            <p class="card-text">Nome del Piatto</p>
          </div>
        </div>
      </div>
      <div class="col bg-info p-3">
        <div class="card">
          <img class="card-img-top" src="https://picsum.photos/200/200" alt="Nome del Piatto" />
          <div class="card-body">
            <p class="card-text">Nome del Piatto</p>
          </div>
        </div>
      </div>
      <div class="col bg-info p-3">
        <div class="card">
          <img class="card-img-top" src="https://picsum.photos/200/200" alt="Nome del Piatto" />
          <div class="card-body">
            <p class="card-text">Nome del Piatto</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- I NOSTRI RISTORANTI -->
  <div class="container my-5">
    <div class="row text-center">
      <h2>I nostri ristoranti</h2>
      <div class="col-md-4 d-flex mb-4 mt-4" v-for="restaurant in selectedRestaurants">
        <div class="card flex-fill">
          <img class="card-img-top" :src="getImageUrl(restaurant.image)" alt="Nome Ristorante" />
          <div class="card-body d-flex justify-content-between flex-column">
            <h3>{{ restaurant.name }}</h3>
            <p class="card-text">{{ restaurant.description }}</p>
            <p class="card-text">
              <font-awesome-icon icon="fa-solid fa-location-dot" style="color: #3d348b;" />
              {{ restaurant.address }}
            </p>

            <router-link to="/dishes" class="btn bg-warning text-white text-decoration-none">Vai al
              ristorante</router-link>

          </div>
        </div>
      </div>
    </div>
  </div>
  <nav aria-label="Page navigation example ">
    <div class="d-flex justify-content-center gap-2 p-2">
      <div>
        <button v-if="selectedRestaurants.next_page_url" @click="prevPage(selectedRestaurants.prev_page_url)"
          class="project_btn btn border-black">
          Previous
        </button>
      </div>
      <div>
        <button @click="nextPage(selectedRestaurants.next_page_url)" class="project_btn btn border-black">
          Next
        </button>
      </div>
    </div>
  </nav>

  <!-- I RISTORANTI PIù VOTATI -->
  <div class="container my-5">
    <div class="row text-center">
      <h2>I nostri ristoranti più apprezzati</h2>
      <div class="col">
        <div class="card">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="https://picsum.photos/200/200" class="card-img h-100" alt="Nome Ristorante" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text">Informazioni sul Ristorante</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="https://picsum.photos/200/200" class="card-img h-100" alt="Nome Ristorante" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text">Informazioni sul Ristorante</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="https://picsum.photos/200/200" class="card-img h-100" alt="Nome Ristorante" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text">Informazioni sul Ristorante</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="https://picsum.photos/200/200" class="card-img h-100" alt="Nome Ristorante" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text">Informazioni sul Ristorante</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="https://picsum.photos/200/200" class="card-img h-100" alt="Nome Ristorante" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text">Informazioni sul Ristorante</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
