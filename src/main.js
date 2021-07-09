import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

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
