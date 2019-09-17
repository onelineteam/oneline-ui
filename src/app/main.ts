import {Vue, CreateElement} from '@core';
import VueRouter from 'vue-router';
import App from './App.vue';
import install, {OneLineButton, OneLineButtonGroup, OneLinePopover, OneLineIcon} from '../packages';

import "../style/index.scss";
Vue.use(VueRouter);
install(Vue, []);
const router = new VueRouter({
  routes: []
})

new Vue({
  router: router,
  render(h: CreateElement) {
    return h(App);
  }
}).$mount('#app')