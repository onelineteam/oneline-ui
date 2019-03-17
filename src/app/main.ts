import {Vue, CreateElement} from '@core';
import App from './App.vue';

import "../style/index.scss";
import "./components/font-aswesome/scss/font-awesome.scss";

new Vue({
  render(h: CreateElement) {
    return h(App);
  }
}).$mount('#app')