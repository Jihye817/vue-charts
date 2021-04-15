import Vue from 'vue'
import App from './App.vue'
import ChartPlugin from './plugins/ChartPlugin.js';

Vue.config.productionTip = false

// install(); 실행 
Vue.use(ChartPlugin);

new Vue({
  render: h => h(App),

  /*
  render 함수의 변환 과정
    //1
    render: function(createElement) {
      return createElement(App);
    },
    //2
    render: function(h) {
      return h(App);
    },
    //3
    render: (h) => {
      return h(App);
    },
    //4
    render: (h) => h(App);
  */

}).$mount('#app')
