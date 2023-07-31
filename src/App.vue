<template>
  <div>
    <!-- INICIO NAVBAR -->
    <nav
      v-if="isAuthenticated"
      class="navbar navbar-expand-sm bg-dark navbar-dark"
    >
      <div class="container">
        <!-- Logotipo -->
        <router-link class="navbar-brand order-md-first" to="/home">
          CT System
        </router-link>

        <!-- Links do menu -->
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/usuarios">
              Criar Usuário
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/listar-usuarios">
              Listar Usuários
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/transacoes">
              Transaçôes
            </router-link>
          </li>
        </ul>

        <!-- Botão de logout -->
        <button class="btn text-light" @click="logout">
          <font-awesome-icon :icon="['fas', 'right-from-bracket']" /> Logout
        </button>
      </div>
    </nav>
    <!-- FIM NAVBAR -->

    <div class="container mt-5">
      <router-view />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      isAuthenticated: false,
    };
  },

  mounted() {
    // Verifica se o usuário está autenticado
    this.isAuthenticated = this.checkAuthentication();
  },

  methods: {
    checkAuthentication() {
      return localStorage.getItem("token") !== null;
    },

    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");

      axios
        .post("http://localhost:3030/logout")
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
          Alert.showToast("error", "Erro ao fazer logout");
        });
    },
  },

  watch: {
    // Observa as mudanças na rota
    $route() {
      // Atualiza o status de autenticação com base na rota atual
      this.isAuthenticated = this.checkAuthentication();
    },
  },
};
</script>

<style>
.navbar-brand {
  margin-right: auto;
}

.navbar-nav {
  margin: 0 auto;
}
</style>
