import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import { isAuthenticated } from "../utils/auth";
import nProgress from "nprogress";

const routes = [
  {
    path: "/",
    redirect: "/login", // Redireciona para a tela de login como rota inicial
  },
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
    path: "/usuarios",
    name: "Criar Novo Usuário",
    component: () =>
      import("../components/create-usuario/CreateUsuarioComponent"),
  },
  {
    path: "/usuarios/listar",
    name: "Listar Usuários",
    component: () => import("../components/list-usuario/ListUsuarioComponent"),
  },
  {
    path: "/usuarios/:id",
    name: "Editar Usuário",
    component: () => import("../components/edit-usuario/EditUsuarioComponent"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // Inicia o progresso do nProgress
  nProgress.start();

  // Verifica se a rota requer autenticação e se o usuário está autenticado
  if (to.name !== "login" && !isAuthenticated()) {
    // Redireciona para a página de login se não estiver autenticado
    next({ name: "login" });
  } else {
    // Continua a transição para a próxima rota
    next();
  }
});

router.afterEach((to, from) => {
  // Completa o progresso do nProgress
  nProgress.done();
});

export default router;
