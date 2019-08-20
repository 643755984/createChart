import Vue from 'vue'

import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import echarts from 'echarts';

import option from "./common/js/option.js"

import './common/css/index.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$echarts = echarts;
Vue.prototype.$option = option;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
