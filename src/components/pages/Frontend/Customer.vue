<template>
  <div class=" column justify-content-center customerpage">
    <div class="bar my-3">
      <div class="progress-container">
        <div class="progress" id="progress" :style="{ width: width }"></div>
        <div class="car">
          <img
            class="racecar"
            :style="{ left: width }"
            src="https://img.icons8.com/color/48/000000/f1-race-car-top-veiw.png"
          />
        </div>
        <div class="symbol d-flex ">
          <ul>
            <li>
              <div class="circle active">
                <p>購物車內容</p>
              </div>
            </li>

            <li>
              <div class="circle" :class="{ active: currentActive >= 2 }">
                <p>客戶資訊</p>
              </div>
            </li>
            <li>
              <div class="circle" :class="{ active: currentActive === 3 }">
                <p>結帳</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <main role="main">
        <router-view class="mb-5"
          v-on:nextMethod="next"
          v-on:prevMethod="prev"
          :currentValue="currentActive"
        ></router-view>
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
      </main>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");

:root {
  --line-border-fill: #ff4d4d;
  --line-border-empty: #e0e0e0;
}

.bar {
  margin-top: 80px;
  display: flex;
  justify-content: center;
}

.car {
  width: 800px;
  .racecar {
    position: relative;
    // animation-name: BMW-anima;
    animation-duration: 4s;
    animation-delay: 2s;
    transition: 0.4s ease;
  }
}

@keyframes BMW-anima {
  from {
    left: 0px;
  }
  to {
    left: 20px;
  }
}

.progress-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 800px;
}

.footer {
  // letter-spacing: 6px;
  font-family: "Sawarabi Mincho", sans-serif;
  color: #fff;
  position: relative;
  z-index: 20;
  background: #262673;
}

.symbol {
  position: absolute;
  top: 35px;
  justify-content: space-around;
  width: 800px;
  li {
    width: 80px;
    display: flex;
    justify-content: center;
  }
}

.progress-container::before {
  content: ""; /* must be added when using the ::before pseudoselector */
  background-color: var(--line-border-empty);
  position: absolute;
  top: 50%;
  // left: 12px;

  height: 4px;
  width: 100%;
  z-index: -1;
}

.progress-container ul {
  // left: 3px;
  width: 100%;
  justify-content: space-between;
  list-style: none;
  display: flex;
  padding: 0;
  position: relative;
  top: 10px;
  li {
    // margin-left: 40px;
    display: flex;
    flex-direction: column;
  }
}

.progress {
  background-color: var(--line-border-fill);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(
    -30%
  ); /* centers the line vertically along the y-axis */
  height: 4px;
  width: 0%;
  z-index: -1;
  transition: 0.4s ease;
}

.circle {
  position: relative;
  // right: -1px;
  background-color: rgb(228, 126, 126);
  color: white;
  border-radius: 5px;
  height: 40px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid rgb(228, 210, 133);
  transition: 0.4s ease;
  p {
    margin-top: 15px;
  }
}

.customerpage {
  // width: 60%;
  // background: rgb(194, 181, 181);
  z-index: -5;
}

.circle.active {
  color: rgb(228, 210, 133);
  border-color: var(--line-border-fill);
}
</style>

<script>
import Cart from "./Cart";
import Form from "./Form";
export default {
  data() {
    return {
      currentActive: 1,
      steps: 1,
      process: 3,
      width: 0.01
      // cardistance:0,
    };
  },
  components: {
    Cart,
    Form
    // Alert,
  },
  methods: {
    next() {
      const vm = this;
      vm.currentActive++;

      if (vm.currentActive > vm.process) {
        vm.currentActive = vm.process;
      }
      vm.width = ((vm.currentActive - 1) / (vm.process - 1)) * 100 - 3 + "%";
      // vm.cardistance = vm.width * 100 -10 ;
      this.msg = vm.currentActive;

      if (this.$route.path === "/customer/cart") {
        vm.$router.push("/customer/form");
      }
      // console.log(this.$route.path);
    },

    prev() {
      const vm = this;

      vm.currentActive--;
      vm.width = ((vm.currentActive - 1) / (vm.process - 1)) * 100 + "%";
      // console.log(vm.currentActive);
      // console.log(vm.width);

      if (this.$route.path === "/customer/form") {
        vm.$router.push("/customer/cart");
      }
    }
  },
  mounted() {
    this.circles = document.querySelectorAll(".circle");
    this.actives = document.querySelectorAll(".active");
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    this.$http.defaults.headers.common.Authorization = token;
  }
};
</script>
