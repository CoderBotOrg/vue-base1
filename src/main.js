import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Page1 from './Page1.vue'
import Page2 from './Page2.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/foo', component: Page1 },
  { path: '/bar', component: Page2 },
  { path: '/user/:id', component: Page2}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
