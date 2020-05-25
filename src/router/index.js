import Vue from "vue";
import VueRouter from "vue-router";

// Sites
import Home from "../views/Home.vue";
import Coins from "../views/Coins.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/coins",
    name: "Coins",
    component: Coins
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
