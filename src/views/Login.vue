<template>
  <main class="form-signin w-100 m-auto">
    <div class="login-container">
      <h1 class="h3 mb-3 fw-normal text-center">Login</h1>

      <form @submit.stop.prevent="submit()">
        <div class="text-start">
          <label class="form-label">Email</label>
          <input
            v-model="input.email"
            type="email"
            class="form-control"
            id="email"
            placeholder="nome@exemplo.com"
          />
        </div>
        <div class="text-start mt-3">
          <label class="form-label">Senha</label>
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
import Alert from "../utils/Alert";
import axios from "axios";

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
            this.$router.push("/usuarios");
            // Exibe um alerta de sucesso
            Alert.showToast("success", "Autenticação bem-sucedida");
          }
        })
        .catch((error) => {
          console.log(error);
          // Login mal-sucedido
          Alert.showToast("error", "Acesso não autorizado");
        });
    },
  },
  mounted() {
    if (this.$route.name === "login" && localStorage.getItem("token")) {
      // Se houver um token, significa que o usuário já está autenticado
      // Redireciona diretamente para a tela de home
      this.$router.push("/usuarios");
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
