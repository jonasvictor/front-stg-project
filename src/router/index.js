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
    name: "criar-usuario",
    component: () =>
      import("@/components/create-usuario/CreateUsuarioComponent"),
  },
  {
    path: "/editar-usuario/:id",
    name: "editar-usuario",
    component: () => import("@/components/edit-usuario/EditUsuarioComponent"),
  },
  {
    path: "/listar-usuarios",
    name: "listar-usuarios",
    component: () => import("@/components/list-usuario/ListUsuarioComponent"),
  },
  {
    path: "/transacoes",
    name: "transacoes",
    component: () =>
      import("@/components/transacoes/TransacoesUsuarioComponent"),
    meta: { requiresAuth: true },
  },
  {
    path: "/saque",
    name: "saque",
    component: () => import("@/components/transacoes/SaqueComponent"),
    meta: { requiresAuth: true },
  },
  {
    path: "/deposito",
    name: "deposito",
    component: () => import("@/components/transacoes/DepositoComponent"),
    meta: { requiresAuth: true },
  },
  {
    path: "/extrato",
    name: "extrato",
    component: () => import("@/components/transacoes/ExtratoComponent"),
    meta: { requiresAuth: true },
  },
  // {
  //   path: "/extrato/deposito",
  //   name: "extrato-deposito",
  //   component: () => import("@/components/transacoes/ExtratoComponent"),
  //   meta: { requiresAuth: true },
  // },
  // {
  //   path: "/extrato/saque",
  //   name: "extrato-saque",
  //   component: () => import("@/components/transacoes/ExtratoComponent"),
  //   meta: { requiresAuth: true },
  // },
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
