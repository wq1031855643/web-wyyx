import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: ()=> import('../pages/home/Home/Home')
  },
  {
    path: '/classify',
    component: ()=> import('../pages/classify/Classify/Classify')
  },
  {
    path: '/matter',
    component: ()=> import('../pages/matter/Matter/index')
  },
  {
    path: '/cart',
    component: ()=> import('../pages/cart/Cart/index')
  },
  {
    path: '/mine',
    component: ()=> import('../pages/mine/Mine/index')  
  },
  {
    path: '/search',
    component: ()=> import('../components/Search.vue')
  }
];

// 创建路由对象
const router = new Router({
  routes
});

export default router;