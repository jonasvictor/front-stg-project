import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import { isAuthenticated } from "../utils/auth";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true }, // Requer autenticação para acessar a rota
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !isAuthenticated()) {
    next({ name: "login" }); // Redireciona para a página de login se não estiver autenticado
  } else {
    next();
  }
});

export default router;
