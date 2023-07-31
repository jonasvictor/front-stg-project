<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Editar dados do Usuário</h3>
      </div>

      <div class="card-body">
        <form v-on:submit.prevent="editFormUsuario()">
          <!-- INÍCIO DO BLOCO: NOME -->
          <div class="form-group">
            <label class="font-weight-bold">Nome do Usuário</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              v-model="usuarioForm.name"
            />
          </div>
          <!-- FIM DO BLOCO: NOME -->

          <!-- INÍCIO DO BLOCO: EMAIL -->
          <div class="form-group mt-3">
            <label class="font-weight-bold">Email do Usuário</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-control"
              v-model="usuarioForm.email"
            />
          </div>
          <!-- FIM DO BLOCO: EMAIL -->

          <!-- INÍCIO DO BLOCO: BOTÃO DE SUBMISSÃO -->
          <div class="form-group mt-3">
            <button type="submit" class="btn btn-primary">
              <font-awesome-icon :icon="['fas', 'user-pen']" />
              Editar
            </button>
          </div>
          <!-- FIM DO BLOCO: BOTÃO DE SUBMISSÃO -->
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import UsuarioService from "../../services/UsuarioService";
import Alert from "../../utils/Alert";

export default {
  name: "EditUsuarioComponent",

  data() {
    return {
      usuarioForm: {
        name: "",
        email: "",
      },
    };
  },

  mounted() {
    // this.editUsuario();
    this.getUsuarioById();
  },

  methods: {
    async getUsuarioById() {
      const { id } = this.$route.params;
      const response = await UsuarioService.getUsuarioId(id);

      this.usuarioForm = { ...response };
    },

    async editFormUsuario() {
      console.log("Dados a serem enviados para atualização:", this.usuarioForm);

      // Faz a requisição PUT passando o objeto this.usuarioForm diretamente
      await UsuarioService.updateUsuario(
        this.$route.params.id,
        this.usuarioForm
      );
      Alert.showToast("success", "Usuário atualizado com sucesso!");
      this.$router.push({ name: "listar-usuarios" });
    },
  },
};
// async editFormUsuario() {
//   const response = await UsuarioService.updateUsuario({
//     name: this.usuarioForm.name,
//     email: this.usuarioForm.email,
//   });
//   console.log(response);
//   this.$router.push({ name: "listar-usuarios" });
// },
</script>
