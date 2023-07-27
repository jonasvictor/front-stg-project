<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header">
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
      valorDeposito: null,
    };
  },
  methods: {
    async submitDeposito() {
      // TODO: Implementar a lógica para realizar o depósito
      await TransacaoService.createDeposito({
        usuario_id: this.usuario_id,
        valor: this.valorDeposito,
      });
      console.log("Depósito realizado com sucesso!");
      alert(
        `Depósito de R$ ${this.valorDeposito.toFixed(2)} para o usuário de ID ${
          this.usuario_id
        } realizado com sucesso!`
      );
      this.$router.push("/transacoes");
    },
  },
};
</script>

<style>
/* ... Estilos específicos para o componente, se necessário ... */
</style>
