<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div>
      <table
      class="table mt-5 table-hover  align-middle table-border-color table-striped"
    >
      <thead>
        <tr class="table-secondary">
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th width="80">編輯</th>
        </tr>
      </thead>
      <tbody class="table-striped">
        <tr v-for="item in products" :key="item.id">
          <td class="align-middle">
            <span v-if="item.paid_date"> {{ item.paid_date | Date }}</span>
            <span v-else>未付款</span>
          </td>

          <td class="align-middle">{{ item.user.email }}</td>
          <td>
            <ul class="list-unstyled ">
              <li
                class="text-left "
                v-for="product in item.products"
                :key="product.id"
              >
                {{ product.product.title }} 數量 : {{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-left">
            {{ item.total | currency }}
          </td>
          <td>
            <span v-if="item.is_paid" class="text-success">付款成功</span>
            <span v-else>未付款</span>
          </td>
          <td>
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <!-- <button class="btn btn-outline-primary btn-sm" @click="deleteModal(item)">刪除</button> -->
          </td>
        </tr>
      </tbody>
    </table>

    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content border-2">
          <div class="modal-header bg-info text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
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
            <div class="row">
              <div class="col-md">
                <div class="form-group">
                  <label for="title" class="headings-font-weight"
                    ><span class="label label-primary">姓名</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="product.user.name"
                    placeholder="請輸入標題"
                  />
                </div>

                <div class="form-group">
                  <label for="category">信箱</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    v-model="product.user.email"
                    placeholder="請輸入分類"
                  />
                </div>
                <div class="form-group">
                  <label for="paid_time">購買時間</label>
                  <input
                    type="text"
                    class="form-control"
                    id="paid_time"
                    v-model="product.paid_date | Date"
                    placeholder="請輸入單位"
                  />
                </div>

                <div class="form-group">
                  <label for="telephone">電話</label>
                  <input
                    type="text"
                    class="form-control"
                    id="telephone"
                    v-model="product.user.tel"
                    placeholder="請輸入電話"
                  />
                </div>
                <div class="form-group">
                  <label for="address">地址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    v-model="product.user.address"
                    placeholder="請輸入地址"
                  />
                </div>

                <hr class="col-md-10" />

                <div class="form-group">
                  <label for="message">訊息</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="message"
                    v-model="product.message"
                    placeholder="訊息為.."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer justify-content-around">
            <button
              type="button"
              class="btn btn-outline-secondary btn-padding-x-lg"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary btn-padding-x-lg"
              @click="updateProduct()"
            >
              確認
            </button>
          </div>
        </div>
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
      paidtime: "",
      pagination: false,
      products: {
        user: {
          address: "",
          email: " ",
          tel: "",
          name: ""
        }
      },
      product: {
        user: {
          address: "",
          email: "",
          tel: "",
          name: ""
        }
      },
      isLoading: false,
      isNew: false
    };
  },
  methods: {
    getProducts(page = 1) {
      ///api/:api_path/admin/orders?page=:page
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/orders?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        // const millisecond = response.data.orders.create_at;
        console.log(response.data);
        // console.log(new Date(response.data.orders.create_at).toString());
        vm.isLoading = false;
        vm.products = response.data.orders;
        vm.pagination = response.data.pagination;
        // vm.paidtime =
      });
    },
    openModal(isNew, item) {
      console.log(item);
      if (isNew) {
        this.product = {};
        this.isNew = true;
      } else {
        this.product = Object.assign({}, item);
        // this.products = Object.assign({}, item.products);
        this.isNew = false;
        console.log(this.products);
      }
      $("#productModal").modal("show");
    },
    updateProduct() {
      const vm = this;
      let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/order/${vm.product.id}`;
      // let httpMethod = 'post';
      // const vm = this ;
      this.$http.put(api, { data: vm.product }).then(response => {
        console.log(response.data);
        if (response.data.success) {
          $("#productModal").modal("hide");
          vm.getProducts();
        } else {
          $("#productModal").modal("hide");
          vm.getProducts();
          // console.log('新增失敗');
        }
        // vm.products = response.data.products
      });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>
