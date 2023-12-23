<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "AppFooter",
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <svg
    id="wave"
    style="transform: rotate(0deg); transition: 0.3s;"
    viewBox="0 0 1440 100"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
        <stop stop-color="rgba(247, 184, 1, 1)" offset="0%"></stop>
        <stop stop-color="rgba(255, 189.695, 0, 1)" offset="100%"></stop>
      </linearGradient>
    </defs>
    <path
      style="transform: translate(0, 0px); opacity: 1;"
      fill="url(#sw-gradient-0)"
      d="M0,40L40,38.3C80,37,160,33,240,41.7C320,50,400,70,480,70C560,70,640,50,720,40C800,30,880,30,960,36.7C1040,43,1120,57,1200,66.7C1280,77,1360,83,1440,85C1520,87,1600,83,1680,68.3C1760,53,1840,27,1920,23.3C2000,20,2080,40,2160,48.3C2240,57,2320,53,2400,55C2480,57,2560,63,2640,60C2720,57,2800,43,2880,41.7C2960,40,3040,50,3120,50C3200,50,3280,40,3360,40C3440,40,3520,50,3600,56.7C3680,63,3760,67,3840,60C3920,53,4000,37,4080,30C4160,23,4240,27,4320,35C4400,43,4480,57,4560,56.7C4640,57,4720,43,4800,35C4880,27,4960,23,5040,20C5120,17,5200,13,5280,13.3C5360,13,5440,17,5520,26.7C5600,37,5680,53,5720,61.7L5760,70L5760,100L5720,100C5680,100,5600,100,5520,100C5440,100,5360,100,5280,100C5200,100,5120,100,5040,100C4960,100,4880,100,4800,100C4720,100,4640,100,4560,100C4480,100,4400,100,4320,100C4240,100,4160,100,4080,100C4000,100,3920,100,3840,100C3760,100,3680,100,3600,100C3520,100,3440,100,3360,100C3280,100,3200,100,3120,100C3040,100,2960,100,2880,100C2800,100,2720,100,2640,100C2560,100,2480,100,2400,100C2320,100,2240,100,2160,100C2080,100,2000,100,1920,100C1840,100,1760,100,1680,100C1600,100,1520,100,1440,100C1360,100,1280,100,1200,100C1120,100,1040,100,960,100C880,100,800,100,720,100C640,100,560,100,480,100C400,100,320,100,240,100C160,100,80,100,40,100L0,100Z"
    ></path>
  </svg>

  <footer class="p-3" style="margin-top: -10px;">
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-4">
        <div class="col-12 col-md-6 col-lg-3 mb-3 text-center">
          <img
            src="../assets/img/cicogna-spatola.png"
            class="img-fluid w-50 img-footer"
          />
        </div>

        <div class="col-12 col-md-6 col-lg-3 mb-3 pt-4 discover-us">
          <h5>Discover us</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a
                href="#"
                class="nav-link p-0 text-body-secondary custom-hover text-danger"
                >Investors</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Careers</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >About us</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Services</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Restaurant signup</a
              >
            </li>
          </ul>
        </div>

        <div class="col-12 col-md-6 col-lg-3 mb-3 pt-4">
          <h5>Legal</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Terms and conditions</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Privacy</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Cookies</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Public Authority Requests</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Our Policy</a
              >
            </li>
          </ul>
        </div>

        <div
          class="col-12 col-md-6 col-lg-3 mb-3 pt-4 d-flex flex-column discover-col"
        >
          <h5>Help</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Contacts</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >FAQs</a
              >
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-body-secondary custom-hover"
                >Cuisine</a
              >
            </li>
          </ul>
          <div class="col-12 col-md-6 col-lg-3 mb-3 pt-4 text-nowrap">
            <!-- Sezione Follow Us -->
            <h5>Follow us</h5>
            <div style="margin-left: -10.5px;">
              <a href="https://www.facebook.com" class="me-2"
                ><font-awesome-icon icon="fa-brands fa-facebook-f"
              /></a>
              <a href="https://www.twitter.com" class="mx-2"
                ><font-awesome-icon icon="fa-brands fa-twitter"
              /></a>
              <a href="https://www.instagram.com" class="mx-2"
                ><font-awesome-icon icon="fa-brands fa-instagram"
              /></a>
              <a href="https://www.youtube.com" class="mx-2">
                <font-awesome-icon icon="fa-brands fa-youtube"
              /></a>
            </div>
          </div>
        </div>

        <!-- line break -->
        <hr class="w-100" />

        <!-- bottom footer -->
        <div class="container-fluid">
          <p class="text-body-secondary">Deliveboo | © 2023</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.fa-facebook-f {
  color: #4267b2;
  padding: 9px 12px;
}

.fa-twitter {
  color: #1da1f2;
  padding: 10px;
}

.fa-instagram {
  color: black;
  padding: 10px;
}

.fa-youtube {
  color: #ff0000;
  padding: 10px;
}

.fa-facebook-f,
.fa-twitter,
.fa-instagram,
.fa-youtube {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 50%;
}

.fa-facebook-f:hover,
.fa-twitter:hover,
.fa-instagram:hover,
.fa-youtube:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.custom-hover:hover {
  text-shadow: -1px -1px 1px #111, 1px 1px 1px #fff;
}

@media screen and (min-width: 575px) and (max-width: 992px) {
  .row {
    text-align: center;
  }
  .img-footer {
    padding-top: 25px;
    width: 60% !important;
  }
  .discover-us {
    padding-top: 50px !important;
  }
  .discover-col {
    align-items: center;
  }
}

@media (max-width: 575px) {
  .img-footer {
    width: 50% !important;
  }
  .row {
    text-align: center;
  }
}
</style>
