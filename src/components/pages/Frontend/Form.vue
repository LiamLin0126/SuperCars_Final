<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="d-flex justify-content-center">
      <div class="FormContainer mt-4 d-flex justify-content-center">
        <div class="orderllistInForm ">
          <div class="orderheader ">
            <h3 class="ml-3 my-3">訂單</h3>
          </div>
          <div class="ordercontent ">
            <div class="quantity d-flex mx-3 my-4 ">
              <div class="content-title mr-auto">數量</div>
              <div class="content-number">{{ totalquantity }}/輛</div>
            </div>
            <div class="cardType mx-3 my-3">
              <h5 class="mb-2 px-1 py-1 font-weight-bold">車種</h5>
              <div class="cardTypeItem d-flex " v-for="item in cart.carts">
                <div class="content-title mr-auto ">
                  {{ item.product.title }}
                </div>
                <div class="content-number">
                  {{ item.qty }}/{{ item.product.unit }}
                </div>
              </div>
            </div>
          </div>
          <div class="orderfooter">
            <div class="totalcost d-flex mx-3 my-5 ">
              <div class="content-title mr-auto ">消費金額</div>
              <div class="content-number">NT. {{ cart.total | currency }}</div>
            </div>
            <div class="return d-flex justify-content-center">
              <button class="btn btn-primary " @click="prev">
                檢視購物清單
              </button>
            </div>
          </div>
        </div>
        <div class="my-3 col-md-5 GuestInfo ml-5">
          <validation-observer v-slot="{ invalid }" class="col-md-6">
            <form @submit.prevent="OrderPay">
              <validation-provider
                rules="required|email"
                v-slot="{ errors, classes }"
              >
                <div class="form-group">
                  <label for="useremail">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="useremail"
                    v-model="form.user.email"
                    placeholder="請輸入 Email"
                    :class="classes"
                  />
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
              </validation-provider>

              <validation-provider
                rules="required"
                v-slot="{ errors, classes }"
              >
                <div class="form-group">
                  <label for="username">收件人姓名</label>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    id="username"
                    v-model="form.user.name"
                    placeholder="輸入姓名"
                    :class="classes"
                  />
                  <span class="invalid-feedback">姓名欄位不可留空</span>
                </div>
              </validation-provider>

              <div class="form-group">
                <label for="usertel">收件人電話</label>
                <input
                  type="tel"
                  class="form-control"
                  id="usertel"
                  v-model="form.user.tel"
                  placeholder="請輸入電話"
                />
              </div>

              <validation-provider
                rules="required"
                v-slot="{ errors, classes }"
              >
                <div class="form-group">
                  <label for="useraddress">收件人地址</label>
                  <input
                    type="text"
                    class="form-control"
                    name="address"
                    id="useraddress"
                    v-model="form.user.address"
                    placeholder="請輸入地址"
                    :class="classes"
                  />
                  <span class="invalid-feedback">地址欄位不得留空</span>
                </div>
              </validation-provider>

              <div class="form-group">
                <label for="comment">留言</label>
                <textarea
                  name=""
                  id="comment"
                  class="form-control"
                  cols="30"
                  rows="10"
                  v-model="form.message"
                ></textarea>
              </div>
              <div class="send d-flex justify-content-end text-right">
                <!-- <button class="btn btn-primary" @click="prev">上一步</button> -->
                <button class="btn btn-danger" :disabled="invalid">
                  送出訂單
                </button>
              </div>
            </form>
          </validation-observer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {
      products: [],
      product: {},
      cart: {
        carts: []
      },
      totalquantity: 0,
      isLoading: false,
      status: {
        loadingItem: ""
      },
      form: {
        user: {
          address: "",
          email: "",
          tel: "",
          name: ""
        },
        message: ""
      },
      currentActive: this.currentValue
    };
  },
  props: {
    currentValue: Number,
    required: true
  },
  methods: {
    getProducts() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response);
        vm.isLoading = false;
        vm.products = response.data.products;
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
        $("#productModal").modal("hide");
      });
    },
    getCart() {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        console.log(response.data.data);
        vm.isLoading = false;
        vm.cart = response.data.data;
      });
    },
    calculateQuantity() {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      this.$http.get(url).then(response => {
        console.log(response.data.data);
        vm.cart.carts = response.data.data.carts;
        vm.cart.carts.forEach(item => {
          vm.totalquantity += item.qty;
          console.log(vm.totalquantity);
        });
        // console.log(vm.cart.carts);
      });
    },
    deleteItemInChart(id) {
      ///api/:api_path/cart/:id
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.delete(url).then(response => {
        this.getCart();
        console.log(response.data);
        vm.isLoading = false;
        // vm.cart = response.data.data;
      });
    },
    prev() {
      this.$emit("prevMethod");
    },
    OrderPay() {
      this.$emit("nextMethod");
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const vm = this;
      const order = vm.form;
      // console.log(order);
      // vm.isLoading = true;
      this.$http.post(url, { data: order }).then(response => {
        if (response.data.success) {
          vm.$router.push(
            `/customer/customer_checkout/${response.data.orderId}`
          );
          console.log("訂單已成功建立", response);
        } else {
          console.log("訂單有問題", response);
        }
      });
    }
  },
  created() {
    this.calculateQuantity();
    this.getProducts();
    this.getCart();
    // this.$bus.$emit('message:push', '這裡是一段訊息', 'success');
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");
.send {
  position: relative;
  //   left: 60px;
  // margin-bottom: 30px;
  right: 10px;
}

.FormContainer {
  width: 60%;
  background-color: rgb(228, 126, 126);
  border-radius: 30px;
}

.GuestInfo {
  border-radius: 15px;
  border: 5px solid rgb(228, 210, 133);
}

.orderllistInForm {
  margin-top: 100px;
  margin-bottom: 300px;
  width: 350px;
  border: 5px solid rgb(228, 210, 133);
  border-radius: 15px;
  background-color: rgb(228, 126, 126);
  .orderheader {
    color: rgb(228, 210, 133) ;
    border-bottom: 2px solid rgb(240, 64, 64);
  }

  .ordercontent {
    border-bottom: 2px solid rgb(240, 64, 64);
    font-size: 20px;

    h5 {
      font-family: "Noto Sans TC", sans-serif;
      display: block;
      width: 50px;
      background: rgb(228, 210, 133);
      border-radius: 12px;
    }
  }

  .orderfooter {
    font-size: 20px;
  }
}
</style>
