<template>
  <diV>
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList/>
    <hr>
    <ShoppingCart/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapActions } from 'vuex'
import ProductList from '../components/shop/ProductList.vue'
import ShoppingCart from '../components/shop/ShoppingCart.vue'

var mixin = {
  data: function() {
    return {
      message: "hello",
      foo: "abc"
    };
  }
};

export default {
  name: "Home",
  components: {
    ProductList,
    ShoppingCart
  },
  data: function() {
    return {
      selected: "A",
      computeAttr: "",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" }
      ]
    };
  },
  //compute cũng giống như method, và nó sẽ không thay đổi khi back trang,
  //nếu như giá trị các thành phần không thay đổi
  // computed: {
  //   // a computed getter
  //   abc: function() {
  //     console.log(this);
  //     return this.selected;
  //   },
  //   xyz: {
  //     get: function() {
  //       return this.selected + "xyz";
  //     },
  //     set: function(newValue) {
  //       this.xyz = newValue;
  //     }
  //   }
  // },

  // giống như compute, nhưng nó luôn dc gọi khi back trang
  // methods: {
  //   reverseMessage: function() {
  //     return this.selected;
  //   }
  // },


  computed: mapState({
    products: state => state.products.all
  }),
  methods: mapActions('cart', [
    'addProductToCart'
  ]),
  created () {
    this.$store.dispatch('products/getAllProducts')
  },

  //dùng để tracking sự thay đổi của thuộc tính
  watch: {
    selected: function(val) {
      this.computeAttr = "Hello " + val;
    }
  },
  mixins: [mixin],
  directives: {
    focusLocal: {
      // directive definition
      inserted: function(el) {
        el.focus();
      }
    }
  },

  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
};
</script>
