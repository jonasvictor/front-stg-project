/**
 * Arquivo de inicialização da aplicação
 *
 * Este arquivo configura e inicializa a aplicação Vue.
 * Ele importa os módulos necessários, como o App.vue, o router, o store e as dependências de estilização.
 * Verifica se o usuário está autenticado e redireciona para a tela de login se necessário.
 * Por fim, cria e monta a aplicação Vue.
 */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import VueSweetalert2 from "vue-sweetalert2";
import axios from "axios";
import "../node_modules/nprogress/nprogress.css";
import FontAwesomeIcon from "@/assets/icons";

// Verifica se o usuário está autenticado e redireciona para a tela de login se necessário
router.isReady().then(() => {
  const isAuthenticated = localStorage.getItem("token") !== null;

  if (!isAuthenticated && router.currentRoute.value.name !== "login") {
    router.push({ name: "login" });
  }
});

// Cria e monta a aplicação Vue
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router, VueSweetalert2, axios)
  .mount("#app");

// import Vue from "vue";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// // Import Bootstrap and BootstrapVue CSS files (order is important)
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue);
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);
