import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Edit from './Edit.vue';
import Index from './Index.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/edit/:id', component: Edit },
  { path: '/', component: Index }
];

const router = new VueRouter({
  routes
});

new Vue({
    el: "#app",
    render: h => h(App),
    router
});
