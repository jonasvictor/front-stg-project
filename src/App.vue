<template>
  <div>
    <!-- INICIO NAVBAR -->
    <nav
      v-if="isAuthenticated"
      class="navbar navbar-expand-sm bg-dark navbar-dark"
    >
      <div class="container">
        <!-- Logotipo -->
        <router-link class="navbar-brand order-md-first" to="/home"
          >CRUD de Cadastro de Usuários
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
        <button class="btn text-light" @click="logout">Logout</button>
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
    // Verifica se o usuário está autenticado quando o componente é montado
    this.isAuthenticated = this.checkAuthentication();
  },

  methods: {
    // Verifica se o usuário está autenticado com base na presença do token no LocalStorage
    checkAuthentication() {
      return localStorage.getItem("token") !== null;
    },

    // Função de logout do usuário
    logout() {
      // Remove o token e outros dados do usuário do armazenamento no LocalStorage
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");

      // Faz uma requisição POST para a rota de logout no backend
      axios
        .post("http://localhost:3030/logout")
        .then(() => {
          // Redireciona para a página de login após o logout
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
          // Exibe uma mensagem de erro caso ocorra um problema no logout
          alert("Ocorreu um erro durante o Logout.");
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
