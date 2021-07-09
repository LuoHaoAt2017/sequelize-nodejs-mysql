import Vue from 'vue';
import Router  from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/',
      redirect: '/home'
    },
  ]
});

export default router
