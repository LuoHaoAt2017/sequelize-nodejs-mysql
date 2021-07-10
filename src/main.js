import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

Vue.use(VXETable);

(function() {
  const app = new Vue({
    store: store,
    router: router,
    render(h) {
      return h(App)
    }
  });
  app.$mount('#app');
})();
