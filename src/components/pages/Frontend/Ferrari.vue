<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="BMW_Background">
      <div class="banner_Ferrari  align-items-center">
        <nav class="address_Ferrari d-flex  justify-content-center">
          <ol class="address-content  d-flex">
            <li class="homepage-item">
              <router-link to="/">首頁</router-link>
            </li>
            <li class="page-category">FERRARI</li>
          </ol>
        </nav>
        <div class="thumb-Ferrari mx-auto">
          <!-- swiper1 -->
          <swiper
            class="swiper-Ferrari gallery-top"
            :options="swiperOptionTop"
            ref="swiperTop"
          >
            <swiper-slide class="slide-1"
              ><div class="contentswiper">
                <p>Ferrari 812 GTS</p>
              </div>
            </swiper-slide>
            <swiper-slide class="slide-2"
              ><div class="contentswiper">
                <p>Ferrari 488 Pista</p>
              </div></swiper-slide
            >
            <swiper-slide class="slide-3"
              ><div class="contentswiper">
                <p>LaFerrari</p>
              </div></swiper-slide
            >
            <swiper-slide class="slide-4"
              ><div class="contentswiper">
                <p>
                  We are the competition.
                </p>
              </div></swiper-slide
            >
            <swiper-slide class="slide-5"
              ><div class="contentswiper">
                <p>Ferrari</p>
              </div></swiper-slide
            >
            <div
              class="swiper-button-next swiper-button-white"
              slot="button-next"
            ></div>
            <div
              class="swiper-button-prev swiper-button-white"
              slot="button-prev"
            ></div>
          </swiper>
          <!-- swiper2 Thumbs -->
          <swiper
            class="swiper-Ferrari gallery-thumbs"
            :options="swiperOptionThumbs"
            ref="swiperThumbs"
          >
            <swiper-slide class="slide-1"></swiper-slide>
            <swiper-slide class="slide-2"></swiper-slide>
            <swiper-slide class="slide-3"></swiper-slide>
            <swiper-slide class="slide-4"></swiper-slide>
            <swiper-slide class="slide-5"></swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="content">
        <div class=" d-flex col-md-12 d-flex justify-content-center">
          <div class="row mt-4 pt-5 d-flex justify-content-left">
            <div
              class="col-md-3 mb-3 "
              v-for="item in products"
              :key="item.id"
              v-if="item.category == 'Ferrari'"
            >
              <div class="card  bg-dark text-light">
                <div
                  style="height: 150px; background-size: cover; background-position: center"
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                ></div>
                <div class="card-body">
                  <span class="badge badge-secondary float-right ml-2 "
                    ><img
                      src="https://svgshare.com/i/UHP.svg"
                      alt=""
                      class="icon_Ferrari"
                  /></span>
                  <h5 class="card-title d-flex">
                    <p class="text-primary mb-0">
                      {{ item.title }}
                    </p>
                    <div
                      class="info ml-1  py-0 btn btn-outline-primarypy-0"
                      @click="openMessageModal(item.id)"
                    >
                      車訊
                    </div>
                  </h5>
                  <p class="card-text">{{ item.description }}</p>
                  <div
                    class="d-flex justify-content-between align-items-baseline"
                  >
                    <div class="h5" v-if="!item.price">
                      {{ item.origin_price }} 元
                    </div>
                    <div class="h5" v-if="item.price">{{ item.price }} 元</div>
                  </div>
                </div>
                <div class="card-footer d-flex">
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm"
                    @click="openProductModal(item.id)"
                  >
                    查看更多
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm ml-auto"
                    @click="addToCart(item.id)"
                  >
                    加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer pt-5 pb-5 mx-auto d-flex justify-content-center ">
        <div class="container row">
          <h1 class="col-md-4 slogan">極速·尊榮·奢華</h1>
          <div class="input-group offset-md-7 col-md-5">
            <h5>訂閱我們的電子報，可以獲得最新車訊以及秘密折扣！</h5>
            <br />
            <input
              type="mail"
              placeholder="abcdef456@gmail.com"
              class="form-control"
            />
            <div class="input-group-append">
              <button class="btn btn-light">訂閱</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ product.title }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt="" />
            <blockquote class="blockquote mt-3">
              <!-- <p class="mb-0">{{ product.content }}</p> -->
              <footer class="blockquote-footer text-right">
                {{ product.description }}
              </footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">
                {{ product.origin_price }} 元
              </div>
              <!-- <del class="h6" v-if="product.price"
                >原價 {{ product.origin_price }} 元</del
              > -->
              <div class="h4" v-if="product.price">
                現在 {{ product.price }} 元
              </div>
            </div>
            <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                選購 {{ num }} {{ product.unit }}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計 <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="addToCart(product.id, product.num)"
            >
              <i
                class="fas fa-spinner fa-spin"
                v-if="product.id === status.loadingItem"
              ></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="MessageModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog ">
        <div class="modal-content ">
          <div class="modal-header bg-info">
            <h5 class="modal-title text-danger " id="exampleModalLabel">
              {{ product.title }}
            </h5>
          </div>
          <div class="modal-body bg-dark text-white">
            <img :src="product.imageUrl" class="img-fluid" alt="" />
            <hr />
            <h3 class="CarInfo_title">Info</h3>
            <p>{{ product.content }}</p>
          </div>
          <div class="modal-footer bg-light">
            <h6>參考資料：https://autos.yahoo.com.tw</h6>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Zhi+Mang+Xing&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");

.img_Ferrari {
  height: 100%;
  width: 100%;
}

.far {
  font-size: 40px;
}

.content {
  z-index: 10;
  position: relative;
  background: #3d3d5c;
}

.carousel-caption {
  font-family: "Lobster", cursive;
  justify-content: start;
  text-align: left;
  h3 {
    font-family: "Kalam", cursive;
  }
}

.content {
  z-index: 10;
  position: relative;
  background: #3d3d5c;
  .info {
    font-size: 10px;
    padding-left: 3px;
    padding-right: 3px;
    padding-bottom: 0px;
    color: rgb(158, 158, 233);
    border: 2px solid rgb(158, 158, 233);
    &:hover {
      background: rgb(218, 45, 45);
      color: wheat;
    }
  }
}

.modal-content {
  position: relative;
  left: -200px;
  width: 1000px;
  .CarInfo_title {
    border-bottom: 2px solid wheat;
  }
}

.contentswiper {
  font-family: "Dancing Script", cursive;
  // background: url("https://images.unsplash.com/photo-1560253787-9c3babc1fab2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80");
  background-attachment: fixed;
  color: #ff4d4d;
  position: absolute;
  bottom: 30px;
  left: 30px;
  font-size: 70px;
}

.carousel-control-prev,
.carousel-control-next {
  width: 6%;
}

.address_Ferrari {
  background: url("https://images.unsplash.com/photo-1554136700-5806f3df309c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80");
  // float: left;
  width: 100%;
  // position: relative;
  background-attachment: fixed;

  .address-content {
    width: 80%;
    // margin-left: 150px;
    margin-bottom: 10px;
    border-bottom: 2px solid #a6a6a6;
    margin-top: 10px;
    list-style-type: none;
    font-size: 20px;
    a {
      color: #a6a6a6;
      text-decoration: none;
    }
    .page-category {
      color: #a6a6a6;
      &::before {
        display: inline-block;
        padding-right: 0.5rem;

        content: "/";
      }
    }
  }
}

.container {
  height: 600px;

  overflow: hidden;

  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(100%);
}

.card {
  &:hover {
    box-shadow: 0px 0px 25px whitesmoke;
  }
}

.carousel {
  overflow: hidden;
  height: 100%;
}

.input-group-append {
  display: block;
}

.footer {
  // letter-spacing: 6px;
  font-family: "Sawarabi Mincho", sans-serif;
  color: #fff;
  position: relative;
  z-index: 20;
  background: #262673;
}

.icon_Ferrari {
  height: 30px;
  width: 30px;
}

.banner_Ferrari {
  background: url("https://images.unsplash.com/photo-1554136700-5806f3df309c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80");
  z-index: 20;
  position: relative;
  width: 100vw;
  background-size: cover;
  //   width: 100%;
  overflow: hidden;
}

.thumb-Ferrari {
  position: relative;
  height: 800px;
  background-color: black;
  overflow: hidden;
  width: 80%;
  // background-size: contain;
}

.swiper-Ferrari {
  .swiper-slide {
    background-size: cover;
    background-position: center;

    &.slide-1 {
      background-image: url("https://imgur.com/4YemqdZ.jpg");
    }
    &.slide-2 {
      background-image: url("https://imgur.com/la7izjB.jpg");
    }
    &.slide-3 {
      background-image: url("https://imgur.com/pijtM1k.jpg");
    }
    &.slide-4 {
      background-image: url("https://images5.alphacoders.com/765/thumb-1920-765793.jpg");
    }
    &.slide-5 {
      background-image: url("https://images.alphacoders.com/698/thumb-1920-698586.jpg");
    }
  }

  &.gallery-top {
    height: 80%;
    width: 100%;
    // background-size: contain;
  }
  &.gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    padding: 20px 0;
  }
  &.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}
</style>

<script>
import $ from "jquery";

// import style (<= Swiper 5.x)
import "swiper/css/swiper.css";

import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

export default {
  name: "swiper-example-thumbs-gallery",
  title: "Thumbs gallery with Two-way control",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      products: [],
      product: {},
      cart: {},
      pagination: {},
      isLoading: false,
      status: {
        loadingItem: ""
      },
      swiperOptionTop: {
        autoplay: true, //可设置数值来指定播放速度
        speed: 400, // 切换图片速度
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response);
        vm.isLoading = false;
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    openMessageModal(id) {
      // /api/:api_path/product/:id
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        console.log(response.data);
        vm.isLoading = false;
        vm.product = response.data.product;
        $("#MessageModal").modal("show");
      });
    },
    openProductModal(id) {
      // /api/:api_path/product/:id
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        console.log(response.data);
        vm.isLoading = false;
        vm.product = response.data.product;
        $("#productModal").modal("show");
      });
    },
    addToCart(id, qty = 1) {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      const cart = {
        product_id: id,
        qty
      };
      this.$http.post(url, { data: cart }).then(response => {
        console.log(response);
        vm.status.loadingItem = "";
        this.getCart();
        vm.$bus.$emit("getCart");
        $("#productModal").modal("hide");
      });
    },
    getCart() {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      this.$http.get(url).then(response => {
        console.log(response.data.data);
        vm.cart = response.data.data;
      });
    }
  },
  created() {
    this.getProducts();
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  }
};
</script>
