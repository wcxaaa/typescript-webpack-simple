import Vue from 'vue';
import App from './App.vue';

export const createApp = () => {

  const app = new Vue({
    el: '#app',
    render: (h: any) => h(App)
  });

  return app;
};
