<template>
  <main class="form-signin w-100 m-auto">
    <div class="login-container">
      <h1 class="h3 mb-3 fw-normal">Login</h1>

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
          <button class="btn btn-primary btn-sm" type="submit">Login</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
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

      fetch("http://localhost:3030/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Access: "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.token) {
            // Login bem-sucedido
            // Armazene o token e os dados do usuário em algum lugar (por exemplo, Vuex ou LocalStorage)
            localStorage.setItem("token", res.token);
            localStorage.setItem("usuario", JSON.stringify(res.user));
            // Redirecione para a página home ou outra página protegida
            this.$router.push("/home");
          } else {
            // Login mal-sucedido
            alert("Acesso não autorizado");
          }
          // if (res.status == "ok") {
          //   this.$router.push("/home");
          // } else {
          //   alert("Acesso não autorizado");
          // }
        })
        .catch((err) => console.log(err));
      // login() {
      //   if (this.input.email != "" && this.input.senha != "") {
      //     this.$router.push("/home");
      //   } else {
      //     alert("Preencha todos os campos");
      //   }
      //   // console.log(this.input);
      //   // this.$router.push("/home");
      // },
    },
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
  color: #999999; /* Defina a cor desejada para o placeholder */
}
</style>
