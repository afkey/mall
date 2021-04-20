import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home/Home'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/Home'
  },
  {
    path:'/Home',
    component:()=>import('../views/home/Home')
  },
  {
    path:'/Category',
    component:()=>import('../views/category/Category')
  },
  {
    path:'/Cart',
    component:()=>import('../views/cart/Cart')
  },
  {
    path:'/Profile',
    component:()=>import('../views/profile/Profile')
  }
]

const router = new VueRouter({
  routes,
  mode: "history",

})

export default router
