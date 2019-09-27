import {Vue, CreateElement} from '@core';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';
import install, {OneLineButton, OneLineButtonGroup, OneLinePopover, OneLineIcon, OneLineRow, OneLineCol, OneLineInput} from '../packages';
import "../style/index.scss";
import "./style.scss";
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'hash',
  routes: [...routes]
})
install(Vue, [OneLineButton, OneLineButtonGroup, OneLinePopover, OneLineIcon, OneLineRow, OneLineCol, OneLineInput]);

new Vue({
  router: router,
  render(h: CreateElement) {
    return h(App);
  }
}).$mount('#app')