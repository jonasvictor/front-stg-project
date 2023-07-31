<template>
  <div class="container">
    <div class="card mx-auto" style="width: 800px">
      <div class="card-header text-center">
        <h5>Realizar Depósito</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitDeposito">
          <div class="mb-3">
            <label for="usuario_id" class="form-label">ID do Usuário:</label>
            <input
              v-model="usuario_id"
              type="number"
              class="form-control"
              id="usuario_id"
              required
            />
          </div>
          <div class="mb-3">
            <label for="valor" class="form-label">Valor do Depósito:</label>
            <input
              v-model="valorDeposito"
              type="number"
              class="form-control"
              id="valor"
              step="0.01"
              required
            />
          </div>
          <div class="col-md-6 mx-auto">
            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary btn-md">
                Enviar
              </button>
              <router-link to="/transacoes" class="btn btn-secondary btn-md"
                >Cancelar</router-link
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import TransacaoService from "../../services/TransacaoService";
import UsuarioService from "../../services/UsuarioService";
import Alert from "../../utils/Alert";

export default {
  data() {
    return {
      usuario_id: null,
      valorDeposito: null,
    };
  },
  methods: {
    async submitDeposito() {
      const usuarioExiste = await UsuarioService.getUsuarioId(this.usuario_id);
      if (!usuarioExiste) {
        Alert.showToast(
          "error",
          "Erro ao realizar o depósito, Usuário não foi encontrado."
        );
        return;
      }

      if (this.valorDeposito <= 0) {
        Alert.showToast(
          "error",
          "O valor do depósito deve ser maior que zero."
        );
        return;
      }

      await TransacaoService.createDeposito({
        valor: this.valorDeposito,
        usuario_id: this.usuario_id,
      });
      Alert.showToast("success", "Depósito realizado com sucesso!");
      this.$router.push("/transacoes");
    },
  },
};
</script>

<style></style>
