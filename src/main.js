import Vue from 'vue'
import App from './App.vue'

import router from './router'
import {request} from './utils'

// 引入UI框架
import ElementUI from 'element-ui'
// 引入css样式
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$axaj = request

// 这里是写入是"根实例"的挂载点
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
