import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "InicioView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/InicioView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginPage.vue"),
  },
  {
    path: "/Productos",
    name: "Productos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DashboardView.vue"),
  },
  {
    path: "/Perfil",
    name: "ProfileView",
    component: () => import("../views/ProfileView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
