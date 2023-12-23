<script>
export default {
  name: "AppBrands",
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div class="container text-center py-5">
    <h3 class="fs-2 p-2 text-black">I ristoranti con cui collaboriamo</h3>
    <div
      id="brandsCarousel"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <!-- Carousel indicators -->
      <div class="carousel-indicators custom-indicators">
        <button
          type="button"
          data-bs-target="#brandsCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#brandsCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#brandsCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <!-- Wrapper for carousel items -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row align-items-center">
            <div class="col-lg-3 col-md-6 col-12">
              <img
                src="../assets/img/images-1.png"
                alt="Brand 1"
                class="img-fluid"
              />
            </div>

            <div class="col-lg-3 col-md-6 col-12 sm-none">
              <img
                src="../assets/img/images-2.jpeg"
                alt="Brand 2"
                class="img-fluid"
              />
            </div>

            <div class="col-lg-3 col-md-6 col-12 dm-none sm-none">
              <img
                src="../assets/img/images-3.png"
                alt="Brand 3"
                class="img-fluid"
              />
            </div>

            <div class="col-lg-3 col-md-6 col-12 dm-none sm-none">
              <img
                src="../assets/img/images-4.png"
                alt="Brand 4"
                class="img-fluid"
              />
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="row align-items-center">
            <div class="col-lg-3 col-md-6 col-12">
              <img
                src="../assets/img/images-5.jpeg"
                alt="Brand 5"
                class="img-fluid"
              />
            </div>

            <div class="col-lg-3 col-md-6 col-12 sm-none">
              <img
                src="../assets/img/images-6.png"
                alt="Brand 6"
                class="img-fluid"
              />
            </div>

            <div class="col-lg-3 col-md-6 col-12 dm-none sm-none">
              <img
                src="../assets/img/images-7.jpeg"
                alt="Brand 7"
                class="img-fluid"
              />
            </div>

            <div class="col-lg-3 col-md-6 col-12 dm-none sm-none">
              <img
                src="../assets/img/images-8.png"
                alt="Brand 8"
                class="img-fluid"
              />
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="row align-items-center">
            <div class="col-lg-3 col-md-6 col-12">
              <img
                src="../assets/img/images-9.png"
                alt="Brand 9"
                class="img-fluid"
              />
            </div>

            <div class="col-lg-3 col-md-6 col-12 sm-none">
              <img
                src="../assets/img/images-10.png"
                alt="Brand 10"
                class="img-fluid"
              />
            </div>

            <div class="col-lg-3 col-md-6 col-12 dm-none sm-none">
              <img
                src="../assets/img/images-11.png"
                alt="Brand 11"
                class="img-fluid"
              />
            </div>

            <div class="col-lg-3 col-md-6 col-12 dm-none sm-none">
              <img
                src="../assets/img/images-12.png"
                alt="Brand 12"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Carousel controls -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#brandsCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#brandsCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel-caption {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  bottom: 0;
}

.carousel-control-prev,
.carousel-control-next {
  width: 5%;
}

#brandsCarousel .carousel-indicators button {
  background-color: #3d348b;
}

.custom-indicators {
  bottom: -45px;
}

.carousel-inner {
  height: 300px;
}

// img {
//     width: 250px;
//     height: 100%;
//     object-fit: cover;
// }

// MEDIA QUERIES
@media screen and (min-width: 767px) and (max-width: 991px) {
  .dm-none {
    display: none;
  }
  .carousel-inner {
    height: 250px;
  }
}

@media screen and (max-width: 767px) {
  .sm-none {
    display: none;
  }
  .carousel-inner {
    height: 250px;
  }
}
</style>
