import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import  "@/assets/js/rem.js"
import Element from 'element-ui'
import router from "./router/router"
import 'element-ui/lib/theme-chalk/index.css'
import BaiduMap from 'vue-baidu-map'
import china from 'echarts/map/json/province/heilongjiang.json'
import "./mock/mock"
echarts.registerMap('heilongjiang', china)

Vue.use(Element,echarts,BaiduMap,{
  ak:"6uNuIn8x6nb6VSWhXvswdaKV41XMQPvg"
})
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
  Element,
  echarts,
  BaiduMap
}).$mount('#app')
