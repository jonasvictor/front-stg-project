import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

// Antes de montar o aplicativo, verifique se o usuário está autenticado
// e redirecione-o para a tela de login se necessário
router.isReady().then(() => {
  const isAuthenticated = localStorage.getItem("token") !== null;

  if (!isAuthenticated && router.currentRoute.value.name !== "login") {
    router.push({ name: "login" });
  }
});

createApp(App).use(store).use(router).mount("#app");

// import Vue from "vue";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// // Import Bootstrap and BootstrapVue CSS files (order is important)
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue);
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);
