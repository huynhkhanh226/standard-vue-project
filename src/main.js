import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './main.scss';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { currency } from './core/currency'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// // This imports all the layout components such as <b-container>, <b-row>, <b-col>:
// import { LayoutPlugin } from 'bootstrap-vue'
// Vue.use(LayoutPlugin)

// // This imports <b-modal> as well as the v-b-modal directive as a plugin:
// import { ModalPlugin } from 'bootstrap-vue'
// Vue.use(ModalPlugin)

// // This imports <b-card> along with all the <b-card-*> sub-components as a plugin:
// import { CardPlugin } from 'bootstrap-vue'
// Vue.use(CardPlugin)

// // This imports directive v-b-scrollspy as a plugin:
// import { VBScrollspyPlugin } from 'bootstrap-vue'
// Vue.use(VBScrollspyPlugin)

// // This imports the dropdown and table plugins
// import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
// Vue.use(DropdownPlugin)
// Vue.use(TablePlugin)


// Register a global custom directive called `v-focus`
// Vue.directive("focus", {
//   // When the bound element is inserted into the DOM...
//   inserted: function(el) {
//     // Focus the element
//     el.focus();
//   }
// });

// Vue.filter('capitalize', function (value) {
//   if (!value) return ''
//   value = value.toString()
//   return value.charAt(0).toUpperCase() + value.slice(1)
// })


Vue.filter('currency', currency)

new Vue({
  router,
  store,
  render: h => h(App),
  
}).$mount('#app')

