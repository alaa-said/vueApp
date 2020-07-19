import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import App from './App.vue'
import AddEmp from './AddEmp.vue'
import Footer from './Footer.vue'
import Header from './Header.vue'
import DashBoard from './DashBoard.vue'
import SearchEmp from './SearchEmp.vue'
import Home from './Home.vue'
Vue.config.productionTip = false;
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery
import 'popper.js'
import 'bootstrap'
import'./assets/app.scss'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css'

Vue.component('app-addemp',AddEmp)
Vue.component('app-footer',Footer)
Vue.component('app-header',Header)
Vue.component('app-dash',DashBoard)
Vue.component('app-search',SearchEmp)
Vue.component('app-home',Home)
Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [ 
  { path:'/add', component:AddEmp },
  { path:'/search', component:SearchEmp },
  { path:'/', component:DashBoard },
]
const router = new VueRouter({
  routes,
  mode:'history'
})




Vue.use(Vuelidate)
Vue.config.productionTip = false;
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')