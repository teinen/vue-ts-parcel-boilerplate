import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("~/src/views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("~/src/views/About.vue")
    }
  ]
});
