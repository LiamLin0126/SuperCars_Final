// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import 'bootstrap'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import bus from './bus'
import DateFilter from './filters/DateTime'
import currencyFilter from './filters/currency'
// import timeline from './timeline'
import VeeValidate from 'vee-validate';
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json'
import * as rules from 'vee-validate/dist/rules';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper/js/swiper.esm'
// import swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

//上面這行官方文件沒寫到。

import 'swiper/css/swiper.css'


SwiperClass.use([Pagination, Mousewheel, Autoplay]);
Vue.use(getAwesomeSwiper(SwiperClass))
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
// swiper.use([Navigation, Pagination, Autoplay])

Vue.filter('Date', DateFilter);

Vue.filter('currency', currencyFilter);
Vue.component('Loading', Loading);
Vue.config.productionTip = false
Vue.use(VueAxios, axios);
// Vue.component('timeline', timeline);
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error => error)
};
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});


localize('zh_TW', TW);

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  console.log("to", to,"next",from,"from",next,"next");
 
  if(to.meta.requiresAuth){
   const api = `${process.env.APIPATH}/api/user/check`;
   
    axios.post(api).then((response) => {
    console.log(response.data)
    if(response.data.success){
       next();
    }else{
      next({
        path:'/login',
      });
    }
   });
  }else{
   next();
  }
  
 })