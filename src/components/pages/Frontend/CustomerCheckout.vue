<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="my-5  d-flex row justify-content-center ">
      <form class="col-md-4 payForm px-5 py-4" @submit.prevent="payOrder">
        <div class="tableForm">
          <table class="table table-borderless" @submit.prevent="payOrder">
            <thead class="titletable">
              <th>品名</th>
              <th>數量</th>
              <th>單價</th>
            </thead>
            <tbody class="contenttable">
              <tr v-for="item in order.products" :key="item.id">
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">
                  {{ item.qty }}/{{ item.product.unit }}
                </td>
                <td class="align-middle text-right">{{ item.final_total }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-right">總計</td>
                <td class="text-right">{{ order.total }}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div class="tableForm">
          <table class="table table-borderless">
            <tbody>
              <tr>
                <th width="100">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>收件人電話</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>收件人地址</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid">尚未付款</span>
                  <span v-else class="text-success">付款完成</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="text-right" v-if="order.is_paid === false">
          <button class="btn btn-danger">確認付款去</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        user: {
          address: "",
          email: "",
          tel: "",
          name: ""
        }
      },
      orderId: "",
      isLoading: false
    };
  },
  methods: {
    getOrder() {
      ///api/:api_path/order/:order_id
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`;
      //const vm = this;
      this.$http.get(url).then(response => {
        console.log(response.data);
        vm.order = response.data.order;
      });
    },
    payOrder() {
      const vm = this;
      // /api/:api_path/pay/:order_id
      vm.isLoading = true;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
      this.$http.post(url, { data: vm.orderId }).then(response => {
        if (response.data.success) {
          vm.getOrder();
          vm.isLoading = false;
        }
      });
    }
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
    console.log(this.orderId);
  }
};
</script>

<style lang="scss" scoped>
.payForm {
  background-color: rgb(228, 126, 126);
   border-radius: 10px;
  width: 80%;
  .tableForm {
    border: 3px solid rgb(228, 210, 133);
    border-radius: 10px;
    margin-bottom: 20px;
    .titletable {
      border-bottom: 2px solid rgb(228, 210, 133);
    }

    .contenttable {
      border-bottom: 2px solid rgb(228, 210, 133);
    }
  }
}
</style>
