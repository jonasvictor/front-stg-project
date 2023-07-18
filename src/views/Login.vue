<template>
  <main class="form-signin w-100 m-auto">
    <div class="login-container">
      <h1 class="h3 mb-3 fw-normal text-center">Login</h1>

      <form @submit.stop.prevent="submit">
        <div class="text-start">
          <label for="email" class="form-label">Email</label>
          <input
            v-model="input.email"
            type="email"
            class="form-control"
            id="email"
            placeholder="nome@exemplo.com"
          />
        </div>
        <div class="text-start mt-3">
          <label for="senha" class="form-label">Senha</label>
          <input
            v-model="input.senha"
            type="password"
            class="form-control"
            id="senha"
            placeholder="********"
          />
        </div>
        <div class="text-end mt-3">
          <button class="btn btn-primary" type="submit">Login</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";

/**
 * Componente Login
 *
 * Este componente representa a tela de login do aplicativo.
 * Ele contém um formulário para inserir o email e senha do usuário.
 * Ao fazer o login, ele envia uma requisição POST para a rota de login do backend,
 * verifica se o login foi bem-sucedido e redireciona para a página home em caso positivo.
 * Caso o login falhe, exibe um alerta de erro.
 * Também verifica se o usuário já está autenticado quando a tela de login é montada
 * e redireciona diretamente para a página home se já estiver autenticado.
 */
export default {
  name: "Login",
  data() {
    return {
      input: {
        email: "",
        senha: "",
      },
    };
  },
  methods: {
    /**
     * Função submit
     *
     * Executada quando o formulário de login é submetido.
     * Faz uma requisição POST para a rota de login do backend com as credenciais do usuário.
     * Verifica se o login foi bem-sucedido com base na resposta do servidor.
     * Se o login for bem-sucedido, armazena o token e os dados do usuário no localStorage,
     * redireciona para a página home e exibe um alerta de sucesso.
     * Caso contrário, exibe um alerta de erro.
     */
    submit() {
      const payload = {
        email: this.input.email,
        senha: this.input.senha,
      };

      axios
        .post("http://localhost:3030/login", payload)
        .then((res) => {
          console.log(res.data);
          if (res.data.token) {
            // Login bem-sucedido
            // Armazene o token e os dados do usuário no LocalStorage
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("usuario", JSON.stringify(res.data.user));
            // Redirecione para a página home
            this.$router.push("/home");

            // Exibe um alerta de sucesso
            Swal.fire({
              icon: "success",
              title: "Autenticação bem-sucedida",
            });
          }
        })
        .catch((error) => {
          console.log(error);
          // Login mal-sucedido
          Swal.fire({
            icon: "error",
            title: "Acesso não autorizado",
          });
        });
    },
  },
  mounted() {
    /**
     * Hook mounted
     *
     * Executado quando a tela de login é montada.
     * Verifica se já há um token no localStorage.
     * Se houver um token e a tela atual for a de login, significa que o usuário já está autenticado.
     * Redireciona diretamente para a página home.
     */
    if (this.$route.name === "login" && localStorage.getItem("token")) {
      // Se houver um token, significa que o usuário já está autenticado
      // Redireciona diretamente para a tela de home
      this.$router.push("/home");
    }
  },
};
</script>

<style>
.form-signin {
  max-width: 330px;
  padding: 1rem;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-container {
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 1.5rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.form-signin input::placeholder {
  color: #999999;
}
</style>
