<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="d-flex  justify-content-center">
      <div class=" cart-table my-5 row  d-flex   ">
        <router-link class="btn btn btn-outline-warning  clearbutton" to="/bmw"
          >返回購物</router-link
        >

        <div class="my-5 row cartcontent">
          <div class="table text-black my-4 font-weight-bold">
            <div class="titlename d-flex mb-3 justify-content-between">
              <div>品名</div>
              <div>數量</div>
              <div>價格</div>
            </div>
            <div class="producttotal">
              <div v-for="item in cart.carts" class="d-flex includingdelete">
                <div class="deletebutton">
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="deleteItemInChart(item.id)"
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
                <div class="cart-list d-flex justify-content-between">
                  <ul class="productname list-unstyled">
                    <li>{{ item.product.title }}</li>
                    <li
                      class="text-success font-weight-bold"
                      v-if="item.coupon"
                    >
                      已套用優惠券
                    </li>
                  </ul>
                  <div class="quantityinlist">
                    {{ item.qty }}/{{ item.product.unit }}
                  </div>
                  <div class="totalprice">{{ item.final_total | currency }}</div>
                </div>
              </div>
            </div>
            <div class="cartfooter ">
              <div class="origintotal d-flex ">
                <div class="mr-auto">總計:</div>
                <div>{{ cart.total | currency}}</div>
              </div>
              <div v-if="cart.final_total !== cart.total">
                <div colspan="3" class="text-right text-success">折扣價</div>
                <div class="text-right text-success">
                  {{ cart.final_total }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="input-group my-3 input-group-sm d-flex justify-content-center "
          >
            <div class="w-80 mr-3">
              <input
                type="text"
                class="form-control"
                placeholder="請輸入優惠碼"
                v-model="coupon_code"
              />
            </div>

            <div>
              <button
                class="btn btn-outline-primary text-danger"
                type="button"
                @click="addCouponCode"
              >
                套用優惠碼
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="order-list ml-5 ">
        <div class="listheader pl-5 pt-2">
          <h2>訂單總計</h2>
        </div>
        <div class="listcontent">
          <div class="list-table pt-3 pb-2">
            <div class="list-row mb-4 align-bottom">
              <div class="list-item pb-2 d-flex align-bottom">
                <div class="list-name mr-auto">數量</div>
                <div class="list-quantity">{{ totalquantity }}/ 輛</div>
              </div>
            </div>
            <div class="list-row mb-4 align-bottom">
              <div class="list-item pb-2 d-flex align-bottom">
                <div class="list-name mr-auto">消費金額</div>
                <div class="list-quantity">NT {{ cart.total | currency }}</div>
              </div>
            </div>
            <div class="list-row mb-4 align-bottom">
              <div class="list-item  pb-2 d-flex align-bottom">
                <div class="list-name mr-auto">運費</div>
                <div class="list-quantity">NT {{ 20000 | currency }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="listfooter py-2">
          <div class="list-item mt-3 pb-2 d-flex align-bottom">
            <div class="list-name mr-auto">總費用</div>
            <div class="list-quantity">
              NT {{ (cart.total + 20000) | currency }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="button d-flex justify-content-between">
      <button
        type="button"
        class="btn btn-outline-secondary"
        id="prev"
        @click="prev()"
        :disabled="currentActive == 1"
      >
        上一步
      </button>
      <button
        type="button"
        class="btn btn-outline-success"
        id="next"
        @click="next()"
        :disabled="currentActive == 3"
        v-if="this.$route.path != '/customer/form'"
      >
        下一步
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.titlename {
  padding-left: 140px;
  padding-bottom: 10px;
  border-bottom: 3px solid rgb(228, 210, 133);
  // width: 600px;
}

.button {
  position: relative;
  width: 525px;
  left: 670px;
}
.producttotal {
  border-bottom: 3px solid rgb(228, 210, 133);
  .includingdelete {
    margin-left: 30px;
    margin-bottom: 30px;
    .cart-list {
      margin-left: 40px;

      width: 600px;

      .productname,
      .quantityinlist,
      .totalprice {
        width: 165px;
        margin-left: 20px;
      }
    }
  }
}

.cart-table {
  position: relative;
  border-radius: 40px;
  background: rgb(228, 126, 126);
  border: 5px solid #daa520;
  width: 600px;
  // margin-left: 3px;
  box-sizing: border-box;
  .cartcontent {
    margin-left: 0px;
    width: 590px;
    // border-bottom: 1px solid red;
  }

  .cartfooter {
    margin-top: 20px;
    // width: 600px;
    margin-left: 120px;
    .origintotal {
      width: 470px;
    }
  }
}

.table {
  position: relative;
  top: 10px;
  // width: 500px;
}
.clearbutton {
  width: 120px;
  position: absolute;
  top: 15px;
  right: 20px;
  border-radius: 5px;
}

.order-list {
  background: rgb(228, 126, 126);
  width: 420px;
  border: 2px solid rgb(228, 210, 133);
  border-radius: 10px;
  margin-left: 40px;
  margin-bottom: 100px;
  margin-top: 100px;
}

.listcontent,
.listfooter {
  font-size: 20px;
}

.order-list .listheader {
  color: rgb(228, 210, 133);
  border-bottom: 2px solid rgb(228, 210, 133);
}
.list-item {
  margin-left: 30px;
  margin-right: 50px;
  /* border-bottom: 2px solid  red; */
}

.list-table {
  border-bottom: 3px solid rgb(228, 210, 133);
}
</style>

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
      step: 0,
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
      currentActive: this.currentValue,
      coupon_code: "",
      totalquantity: 0
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
    next() {
      const vm = this;
      if (vm.cart.carts.length < 1) {
        alert("購物車是空的，請查看");
        return;
      }
      this.$emit("nextMethod");
      //   console.log(vm.cart.carts.length);
    },
    prev() {
      this.$emit("prevMethod");
    },
    getCart() {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      this.$http.get(url).then(response => {
        console.log(response.data.data);
        vm.cart = response.data.data;
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
    OrderPay() {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const vm = this;
      const order = vm.form;
      // console.log(order);
      // vm.isLoading = true;
      this.$http.post(url, { data: order }).then(response => {
        if (response.data.success) {
          vm.$router.push(`customer_checkout/${response.data.orderId}`);
          console.log("訂單已成功建立", response);
        } else {
          console.log("訂單有問題", response);
        }
      });
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code
      };
      vm.isLoading = true;
      this.$http.post(url, { data: coupon }).then(response => {
        this.getCart();
        console.log(response.data);
        vm.isLoading = false;
        // vm.cart = response.data.data;
      });
    }
  },
  created() {
    this.getProducts();
    this.getCart();
    this.calculateQuantity();
    // this.$bus.$emit('message:push', '這裡是一段訊息', 'success');
  }
};
</script>
