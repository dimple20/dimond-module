import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "search",
    component: () =>
      import("../views/Dashboard.vue"),
  },
  {
    path: "/details-info",
    name: "details-info",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/details-info.vue"),
  },
  // {
  //   path: "/search",
  //   name: "search",
  //   component: () =>
  //     import("../views/MainSearchScreen.vue"),
  // },
  // {
  //   path: "/deep-advanced-search",
  //   name: "search",
  //   component: () =>
  //     import(
  //       "../views/Deep-Advanced-Search.vue"
  //     ),
  // },
  // {
  //   path: "/find-member",
  //   name: "find-member",
  //   component: () =>
  //     import("../views/Find-Member-View.vue"),
  // },
  // {
  //   path: "/member-details/:id",
  //   name: "member-details",
  //   component: () =>
  //     import(
  //       "../views/Member-Detail-Screen.vue"
  //     ),
  // },
  // {
  //   path: "/favourite-screen",
  //   name: "favourite-screen",
  //   component: () =>
  //     import("../views/Favourite-Screen.vue"),
  // },
  // {
  //   path: "/pricing-list",
  //   name: "Pricing-Screen",
  //   component: () =>
  //     import("../views/Pricing-Screen.vue"),
  // },
  // {
  //   path: "/search-result",
  //   name: "Search-Result",
  //   component: () => import("../views/Search-Result-Screen.vue"),
  // },
  // {
  //   path: "/diamond-details",
  //   name: "diamond-details",
  //   component: () =>
  //     import("../views/Diamond-Details.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
