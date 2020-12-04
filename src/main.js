import Vue from 'vue'
import App from './App.vue'
import  './assets/styles.css'
import './assets/bootstrap.min.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
