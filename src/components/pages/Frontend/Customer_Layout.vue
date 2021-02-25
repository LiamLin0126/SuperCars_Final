<template>
    <div>
       <nav class="navbar navbar-expand-md navbar-light bg-dark">
            <router-link class="navbar-brand" to="/">Super Cars</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <!-- <div class="collapse navbar-collapse" id="navbarNavDropdown"> -->
                <div class="container-navbar">
                 <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                       <router-link to="/bmw" class="nav-link">
                            <img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/240px-BMW_logo_%28gray%29.svg.png" alt="" > BMW
                         </router-link>
                    </li>
                     <li class="nav-item">
                       <router-link to="/lamborghini" class="nav-link">
                            <img class="icon" src="https://svgshare.com/i/UHA.svg" alt="" > Lamborgini
                         </router-link>
                    </li>
                     <li class="nav-item">
                       <router-link to="/porshe" class="nav-link">
                            <img class="icon" src="https://imgur.com/GTCdZY3.png" alt="" > Porshe
                         </router-link>
                    </li>
                     <li class="nav-item">
                       <router-link to="/ferrari" class="nav-link">
                            <img class="icon" src="https://svgshare.com/i/UHP.svg" alt="" srcset=""> Ferrari
                         </router-link>
                    </li>
                    
                </ul>
            </div>
            <div class="ml-auto">
              <ul class="d-flex">
                <li class="nav-item">
                    <router-link to="/customer/cart" class="nav-link mt-0 text-warning">            
                    <span style="font-size: 30px;">
                        <i class="fas fa-shopping-cart"></i>
                        <div class="quantity" :style="{display: quantity < 1 ? 'none' : 'block'}"><span>{{quantity}}</span></div>
                    </span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/products" class="nav-link mt-0 text-warning">
                    <span style="font-size: 30px;">
                       <i class="fas fa-users-cog"></i>
                    </span>
                    </router-link>
                </li>
              </ul>
            </form>
            </div>
        </nav>
        <div class="container-fluid">
            <main role="main" >
                    <router-view></router-view>
            </main>
        </div>
     <!-- <navbar/> -->
    </div>
</template>



<script>
import Home from "./Home";


export default {
  components: {

    Home,
    // Alert,
  },
  data() {
    return {
      cart: {},
      quantity: 0,
    }
  },
  methods: {
    getCart() {
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const vm = this;
      this.$http.get(url).then(response => {
        console.log(response.data.data);
        vm.cart = response.data.data;
        vm.quantity = vm.cart.carts.length ;
        console.log(vm.quantity);
      });
    },
    
  },
  created() {
    this.getCart();
    this.$bus.$on('getCart', this.getCart);
    // vm.$set(vm.carts, 'quantity', response.data.imageUrl);
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    this.$http.defaults.headers.common.Authorization = token;
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@1,500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');

.navbar-brand {
font-family: 'Caveat', cursive;

  // font-family: 'Ubuntu', sans-serif;
  font-size: 36px;
  background: linear-gradient(to right, red, yellow);
  -webkit-background-clip: text;
  color: transparent;
}

.quantity{
      height: 20px;
    width: 20px;
    background: red;
    border-radius: 50%;
    position: absolute;
    top: 14px;
    right: 132px;
    float: left;
    display: none;
    text-align: center;
    font-size: 15px;
    z-index: 10;
}



.container-fluid{
  // width: 100vw;
  padding: 0;
  // margin-left: -32px;
}
.navbar-nav {
  font-family: 'Londrina Solid', cursive;
  // font-family: "Lato", sans-serif;
}

.navbar{

position: sticky;
right: 0;
left: 0;
top: 0;
z-index: 1030;

}  
  // background-color: transparent;

.icon{
  color: yellow;
  height: 30px;
  width: 30px;
}

li {
  box-sizing: border-box;
  align-items: center;
  // padding-top: 10px;
  list-style-type:none;
  margin-right: 20px;
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, .5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
}

li:hover {
   border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388; 
}

</style>