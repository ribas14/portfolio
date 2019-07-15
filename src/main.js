import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home";
import Work from "./components/Work";
import Talk from "./components/Talk";
import VueRouter from "vue-router";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "hash",
  routes: [
    { path: "/", component: Home },
    { path: "/talk", component: Talk },
    { path: "/work", component: Work }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
