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
            <router-link class="nav-link" to="/usuarios/listar">
              Listar Usuários
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/usuarios/:id">
              Editar Usuário
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
      // Remove o token e outros dados do usuário do armazenamento (por exemplo, LocalStorage)
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");

      // Redireciona para a página de login
      this.$router.push("/login");
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
