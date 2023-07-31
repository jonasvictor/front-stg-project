<template>
  <div class="container mt-4">
    <div class="card mx-auto" style="width: 800px">
      <div class="card-header text-center">
        <h5>Realizar Saque</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitSaque">
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
            <label for="valor" class="form-label">Valor do Saque:</label>
            <input
              v-model="valorSaque"
              type="number"
              class="form-control"
              id="valor"
              step="0.01"
              required
            />
          </div>
          <div class="col-md-6 mx-auto">
            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary">Enviar</button>
              <router-link to="/transacoes" class="btn btn-secondary"
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
import UsuarioService from "../../services/UsuarioService";
import TransacaoService from "../../services/TransacaoService";
import Alert from "../../utils/Alert";

export default {
  data() {
    return {
      usuario_id: null,
      valorSaque: null,
    };
  },
  methods: {
    async submitSaque() {
      const usuarioExiste = await UsuarioService.getUsuarioId(this.usuario_id);
      if (!usuarioExiste) {
        Alert.showToast(
          "error",
          "Erro ao realizar o saque, Usuário não foi encontrado."
        );
        return;
      }

      const saldoAtual = await TransacaoService.getSaldoUsuario(
        this.usuario_id
      );
      if (this.valorSaque > saldoAtual || this.valorSaque <= 0) {
        console.log("Valor do saque não pode ser maior que o saldo atual.");
        Alert.showToast(
          "error",
          "O valor do saque deve ser maior que zero. E não pode ser maior que o saldo atual."
        );
        return;
      }

      await TransacaoService.createSaque({
        usuario_id: this.usuario_id,
        valor: this.valorSaque,
      });
      Alert.showToast("success", "Saque realizado com sucesso!");
      this.$router.push("/transacoes");
    },
  },
};
</script>
