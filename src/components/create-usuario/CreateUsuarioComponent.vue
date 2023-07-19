<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h1>Criar Usuário</h1>
      </div>

      <div class="card-body">
        <form @submit.prevent="handleSubmitForm()">
          <!-- INÍCIO DO BLOCO: NOME -->
          <div class="form-group">
            <label class="font-weight-bold">Nome do Usuário</label>
            <input
              type="text"
              class="form-control placeholder-gray"
              placeholder="Digite o nome do usuário"
              v-model="usuario.name"
              required
            />
          </div>
          <!-- FIM DO BLOCO: NOME-->

          <!-- INÍCIO DO BLOCO: EMAIL -->
          <div class="form-group mt-3">
            <label class="font-weight-bold">Email do Usuário</label>
            <input
              type="email"
              class="form-control placeholder-gray"
              placeholder="Digite o email do usuário"
              v-model="usuario.email"
              required
            />
          </div>
          <!-- FIM DO BLOCO: EMAIL -->

          <!-- INÍCIO DO BLOCO: SENHA -->
          <div class="form-group mt-3">
            <label class="font-weight-bold">Senha do Usuário</label>
            <input
              type="password"
              class="form-control placeholder-gray"
              placeholder="Digite a senha do usuário"
              v-model="usuario.senha"
              required
            />
          </div>
          <!-- FIM DO BLOCO: SENHA -->

          <!-- INÍCIO DO BLOCO: BOTÃO DE SUBMISSÃO -->
          <div class="form-group mt-3">
            <button type="submit" class="btn btn-primary">Criar</button>
          </div>
          <!-- FIM DO BLOCO: BOTÃO DE SUBMISSÃO -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateUsuarioComponent",

  data() {
    return {
      usuario: {
        name: "",
        email: "",
        senha: "",
      },
    };
  },

  methods: {
    handleSubmitForm() {
      // TODO: Implementar a lógica de criação de usuário
    },
  },
};
</script>

<style>
.placeholder-gray::placeholder {
  color: #999999;
}
</style>
