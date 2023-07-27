<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header">
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
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Enviar</button>
          <router-link to="/transacoes" class="btn btn-secondary"
            >Cancelar</router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import TransacaoService from "../../services/TransacaoService";

export default {
  data() {
    return {
      usuario_id: null,
      valorSaque: null,
    };
  },
  methods: {
    async submitSaque() {
      // TODO: Implementar a lógica para realizar o saque
      await TransacaoService.createSaque(this.valorSaque, this.usuario_id);
      console.log("Saque realizado com sucesso!");
      alert(
        `Saque de R$ ${this.valorSaque.toFixed(2)} para o usuário de ID ${
          this.usuario_id
        } realizado com sucesso!`
      );
      this.$router.push("/transacoes");
    },
  },
};
</script>
