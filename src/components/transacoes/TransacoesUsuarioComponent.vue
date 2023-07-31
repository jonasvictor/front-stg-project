<template>
  <div class="container mt-4 d-flex justify-content-center">
    <div class="card" style="width: 600px">
      <div class="card-header text-center">
        <h5>Realizar Transações</h5>
      </div>
      <div class="card-body">
        <div class="d-grid gap-2">
          <!-- Botões para depósito, saque e extrato -->
          <router-link to="/deposito" class="btn btn-primary btn-lg">
            <font-awesome-icon :icon="['fas', 'money-bill']" /> Deposito
          </router-link>
          <router-link to="/saque" class="btn btn-success btn-lg">
            <font-awesome-icon :icon="['fas', 'money-bill-wave']" /> Saque
          </router-link>
          <router-link to="/extrato" class="btn btn-info btn-lg">
            <font-awesome-icon :icon="['fas', 'receipt']" /> Extrato
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style></style>
