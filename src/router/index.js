import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from "@/components/HelloWorld";
import Login from "@/components/pages/Backend/Login";
import dashboard from "@/components/pages/Backend/Dashboard";
import PRODUCT from "@/components/pages/Backend/Products";
import CustomerOrder from "@/components/pages/Frontend/CustomerOrder";
import Layout from "@/components/pages/Frontend/Customer_Layout";
import Home from "@/components/pages/Frontend/Home";
import CustomerCheckout from "@/components/pages/Frontend/CustomerCheckout";
import Lambo from "@/components/pages/Frontend/Lamborghini";
import Porshe from "@/components/pages/Frontend/Porshe.vue";
import BMW from "@/components/pages/Frontend/BMW";
import Ferrari from "@/components/pages/Frontend/Ferrari";
import Customer from "@/components/pages/Frontend/Customer.vue";
import Cart from "@/components/pages/Frontend/Cart.vue"
import Form from "@/components/pages/Frontend/Form.vue"
import Order from "@/components/pages/Backend/Order"
import Coupon from "../components/pages/Backend/Coupon.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "*",
      redirect: "login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/admin",
      name: "Dasgboard",
      component: dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: "products",
          name: "Product",
          component: PRODUCT,
          meta: { requiresAuth: true }
        },
        {
          path: "order",
          name: "Order",
          component: Order,
          meta: { requiresAuth: true }
        },
        {
          path: "coupon",
          name: "Coupon",
          component: Coupon,
          meta: { requiresAuth: true }
        },
      ]
    },
    {
      path: "/",
      name: "根",
      component: Layout,
      children: [
        {
          path: "/",
          name: "首頁",
          component: Home
        },
        {
          path: "porshe",
          name: "Porshe",
          component: Porshe
        },
        {
          path: "bmw",
          name: "BMW",
          component: BMW
        },
        {
          path: "ferrari",
          name: "Ferrari",
          component: Ferrari
        },
        {
          path: "lamborghini",
          name: "Lambo",
          component: Lambo
        },
        {
          path: "/customer",
          name: "Customer",
          component: Customer,
          children: [
            {
              path: "cart",
              name: "Cart",
              component: Cart
              //meta: { requiresAuth: true },
            },
            {
              path: "form",
              name: "Form",
              component: Form
              //meta: { requiresAuth: true },
            },
            {
              path: "customer_checkout/:orderId",
              name: "訂單確認",
              component: CustomerCheckout
              //meta: { requiresAuth: true },
            }
          ]
          //meta: { requiresAuth: true },
        },
        {
          path: "customerOrder",
          name: "商品列表",
          component: CustomerOrder
          //meta: { requiresAuth: true },
        },
        {
          path: "customer_checkout/:orderId",
          name: "訂單確認",
          component: CustomerCheckout
          //meta: { requiresAuth: true },
        }
      ]
    }
  ]
});
