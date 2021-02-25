<template>
  <div>
    <!-- <div class="header" style="height: 120px;"></div> -->
    <!-- https://www.milk-motorclub.com/wp-content/uploads/2020/02/ferrari-stallone-rendering.jpg -->
    <div class="Marvel-back ">
      <div class=" banner d-flex justify-content-center align-items-center ">
        <div class="container mb-3 mt-3">
          <div class="card-bg"></div>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
              ></li>
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
              ></li>
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://imgur.com/DxtWfxi.jpg"
                  class="d-block w-100 "
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://images.hdqwalls.com/download/2019-lamborghini-aventador-s-roadster-5k-1l-1336x768.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://www.milk-motorclub.com/wp-content/uploads/2020/02/ferrari-stallone-rendering.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-bs-slide="prev"
            >
              <i class="fas fa-arrow-alt-circle-left" aria-hidden="true"></i>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-bs-slide="next"
            >
              <i class="fas fa-arrow-alt-circle-right " aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div
        class="BMW d-flex align-items-center justify-content-center pt-4 pb-4"
      >
        <div class="row col-12">
          <div class="col-5 d-flex  BMW-content ">
            <div class="text-white">
              <h1>
                BMW<span class="subtitle">(Bayerische Motoren Werke AG)</span>
              </h1>
              <h2>Sheer Driving Pleasure.</h2>

              <p></p>
            </div>
          </div>
          <div class="col-2 d-flex align-items-end">
            <div class="btn">
              <router-link class="btn_intro" to="/bmw">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                READ MORE
              </router-link>
            </div>
          </div>
          <div class="col-5  d-flex align-items-center">
            <img class="img-fluid" src="https://imgur.com/BtwuhWx.jpg" />
          </div>
        </div>
      </div>
      <div
        class="Lamborgini d-flex align-items-center justify-content-center pt-4 pb-4"
      >
        <div class="row col-12">
          <div class="col-5  d-flex align-items-center">
            <img
              class="img-fluid"
              src="https://imgur.com/OxWc9mS.jpg"
            />
          </div>
          <div class="col-2 d-flex align-items-end">
            <div class="btn">
              <router-link class="btn_intro" to="/lamborghini">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                READ MORE
              </router-link>
            </div>
          </div>
          <div class="col-5 d-flex  Lambo-content  ">
            <div class="text-white">
              <h1>Lamborgini</h1>
              <h2>Meaningful, Memorable, Likable</h2>

              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="Porshe d-flex align-items-center justify-content-center pt-4 pb-4"
      >
        <div class="row col-12">
          <div class="col-5 d-flex  Porshe-content ">
            <div class="text-white">
              <h1>Porshe</h1>
              <h2>There is no substitute.</h2>

              <p></p>
            </div>
          </div>
          <div class="col-2 d-flex align-items-end">
            <div class="btn">
              <router-link class="btn_intro" to="/porshe">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                READ MORE
              </router-link>
            </div>
          </div>
          <div class="col-5  d-flex align-items-center">
            <img
              class="img-fluid"
              src="https://imgur.com/GxXmmSa.jpg"
            />
          </div>
        </div>
      </div>
      <div
        class="Ferrari d-flex align-items-center justify-content-center pt-4 pb-4"
      >
        <div class="row col-12">
          <div class="col-5  d-flex align-items-center">
            <img
              class="img-fluid"
              src="https://imgur.com/0ozvfIX.jpg"
            />
          </div>
          <div class="col-2 d-flex align-items-end">
            <div class="btn">
              <router-link class="btn_intro" to="/ferrari">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                READ MORE
              </router-link>
            </div>
          </div>
          <div class="col-5 d-flex  Ferrari-content ">
            <div class="text-white">
              <h1>Ferrari</h1>
              <h2>We are the competition.</h2>

              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer bg-choco d-flex justify-content-center pb-5" style="">
        <div class="footer-contain pt-4">
          <div class="col row-12 justify-content-center">
            <div class="row-2">
              <h1 class="footer-title">Super Race Luxury</h1>
            </div>
            <div class="social-item row-4 d-flex justify-content-center">
              <ul class="list-unstyled d-flex flex-row ">
                <li class="mr-5">
                  <a href="#"><i class="fab fa-facebook-square"></i></a>
                </li>
                <li class="mr-5">
                  <a href="#"><i class="fab fa-github-square"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </li>
              </ul>
            </div>
            <div class="row-3 d-flex justify-content-center">
              <h3>僅供學習使用，無商業用途，如有侵權，請告知</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

 
</template>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Imbue:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Shadows+Into+Light&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kalam&display=swap");

.Marvel-back {
  position: relative;
//  max-width: 1905px;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 80%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url("https://imgur.com/Zfna4i7.jpg") no-repeat center center;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.5;
  }
}

body {
  p {
    font-family: "Imbue", serif;
    font-size: 40px;
  }

  h1 {
    font-family: "Bebas Neue", cursive;
    font-size: 100px;
  }

  h2 {
    font-family: "Shadows Into Light", cursive;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .fas {
    color: rgb(109, 109, 128);
    font-size: 60px;
  }

  .subtitle {
    padding-left: 20px;
    font-size: 30px;
  }
}

@keyframes BMW-anima {
  from {
    left: -800px;
  }
  to {
    left: 0px;
  }
}

.w-100 {
  width: 100% !important;
  height: 650px;
}

@keyframes Lambo-anima {
  from {
    right: -400px;
  }
  to {
    right: 0px;
  }
}

.footer {
  position: relative;
  z-index: 100;
  opacity: 1;
  margin-bottom: 0px;
}

.Porshe {
  position: relative;
  background: #c0c0c0;
  //#C0C0C0
  z-index: 20;
  overflow: hidden;
  // height: 600px;
  padding: 0;
  margin: 0;
}

.footer {
  position: relative;
  // bottom: 0;
}

.Ferrari {
  position: relative;
  background: #a62c2b;
  //#C0C0C0
  z-index: 20;
  overflow: hidden;

  padding: 0;
  margin: 0;
}

.Porshe-content {
  position: relative;
  animation-name: BMW-anima;
  animation-duration: 4s;
  animation-delay: 2s;
  height: 100%;
}

.footer-title {
  font-family: "Kalam", cursive;
}

.Lamborgini {
  position: relative;
  background: rgb(75, 67, 67);
  z-index: 20;
  overflow: hidden;
  padding: 0;
  margin: 0;

  .Lambo-content {
    position: relative;
    animation-name: Lambo-anima;
    animation-duration: 4s;
    animation-delay: 4s;
    animation-timing-function: ease;
    height: 100%;
  }
}

.BMW {
  position: relative;
  background: black;
  z-index: 20;
  overflow: hidden;
  padding: 0;
  margin: 0;

  .BMW-content {
    position: relative;
    animation-name: BMW-anima;
    animation-duration: 4s;
    animation-delay: 2s;
  }
}

.social-item {
  li {
    a {
      font-size: 60px;
      color: darkslategrey;
      &:hover {
        color: #daa520;
      }
    }
  }
}

.banner {
  z-index: 20;
  position: relative;
  justify-content: center;
  align-content: center;
  // width: 100vw;
  background-size: cover;
  width: 100%;
  overflow: hidden;
}

.card-bg {
  //定位用的
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
  &::after {
    //主要的毛玻璃特效
    content: "";
    position: absolute;
    left: -20px;
    top: -20px;
    right: -20px;
    filter: blur(10px);
    bottom: -20px;
    background: url("https://imgur.com/Zfna4i7.jpg") no-repeat;
    background-attachment: fixed;
  }
}

.btn_intro {
  margin-top: 150px;
  position: relative;
  display: inline-block;
  padding: 25px 30px;
  // margin: 40px 0;
  color: #03e9f4;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  margin-right: 50px;
}
.btn_intro:hover {
  background: #03e9f4;
  color: #050801;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
    0 0 200px #03e9f4;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}
.btn_intro:nth-child(1) {
  filter: hue-rotate(270deg);
}
.btn_intro:nth-child(2) {
  filter: hue-rotate(110deg);
}
.btn_intro span {
  position: absolute;
  display: block;
}
.btn_intro span:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: animate1 1s linear infinite;
}
@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}
.btn_intro span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}
@keyframes animate2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}
.btn_intro span:nth-child(3) {
  bottom: 0;
  right: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
}
@keyframes animate3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.btn_intro span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}
@keyframes animate4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>
