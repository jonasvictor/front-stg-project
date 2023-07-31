import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import VueSweetalert2 from "vue-sweetalert2";
import axios from "axios";
import "../node_modules/nprogress/nprogress.css";
import FontAwesomeIcon from "@/assets/icons";
import money from "v-money3";

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
  .use(router, VueSweetalert2, axios, money, { precision: 4 })
  .mount("#app");
