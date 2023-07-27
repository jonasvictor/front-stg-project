<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header">
        <h5>Realizar Transações</h5>
      </div>
      <div class="card-body">
        <div class="d-grid gap-2">
          <!-- Botões para depósito, saque e extrato -->
          <router-link to="/deposito" class="btn btn-primary">
            <font-awesome-icon :icon="['fas', 'money-bill']" /> Deposito
          </router-link>
          <router-link to="/saque" class="btn btn-success">
            <font-awesome-icon :icon="['fas', 'money-bill-wave']" /> Saque
          </router-link>
          <!-- <button @click="realizarSaque" class="btn btn-success" type="button">
            <font-awesome-icon :icon="['fas', 'money-bill-wave']" /> Saque
          </button> -->
          <router-link to="/extrato" class="btn btn-info">
            <font-awesome-icon :icon="['fas', 'receipt']" /> Extrato
          </router-link>
          <!-- <button @click="verExtrato" class="btn btn-info" type="button">
            <font-awesome-icon :icon="['fas', 'receipt']" /> Extrato
          </button> -->
        </div>
      </div>
    </div>

    <!-- Formulário de depósito -->
    <!-- <div v-if="exibirFormularioDeposito" class="card mt-4">
      <div class="card-header">
        <h5>Depósito</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="realizarDeposito">
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
          <button
            @click="cancelarDeposito"
            type="button"
            class="btn btn-secondary"
          >
            Cancelar
          </button>
        </form>
      </div>
    </div> -->
  </div>
</template>

<script></script>

<style></style>
