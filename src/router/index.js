import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/pages/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomHelloWorlde',
    component: HelloWorld,
    meta:{ requiresAuth:false},
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{ requiresAuth:true},
  }
]

const router = new VueRouter({
  routes
})

export default router
