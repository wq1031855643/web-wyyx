import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import { Swipe, SwipeItem, Lazyload } from 'vant';
import LyTab from 'ly-tab';
import VueLazyLoad from 'vue-lazyload'

Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(LyTab).use(VueLazyLoad);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.onscroll = (e)=> {
  console.log(e)
}