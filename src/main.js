import Vue from 'vue'
import App from './App.vue'
import '@/mobile/flexible'
import '@/styles/reset.css'
import router from '@/router'

import {Search, Tabbar, TabbarItem, NavBar,Col, Row,Image as VanImage ,Cell,Icon } from 'vant'


Vue.use(Search);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(VanImage);
Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Col);
Vue.use(Row);
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
