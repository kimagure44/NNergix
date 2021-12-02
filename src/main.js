import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import Plotly from '../node_modules/plotly.js-dist/plotly';

import '@babel/polyfill';

Vue.config.productionTip = false;
Vue.prototype.$Plotly = Plotly;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
