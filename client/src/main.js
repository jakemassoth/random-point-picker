import Vue from 'vue';
import VueSub from 'vue-sub';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueSub);

const observable = new VueSub();

new Vue({
  router,
  observable,
  render: (h) => h(App),
}).$mount('#app');
