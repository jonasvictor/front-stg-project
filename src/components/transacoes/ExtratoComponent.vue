<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header">
        <h5>Gerar Extrato das Transações</h5>
      </div>
      <div class="card-body">
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
          <label for="filtro" class="form-label">Filtrar por:</label>
          <select v-model="filtro" class="form-select" id="filtro">
            <option value="geral">Geral</option>
            <option value="deposito">Depósito</option>
            <option value="saque">Saque</option>
          </select>
        </div>
        <button @click="gerarExtrato" class="btn btn-primary" type="button">
          <font-awesome-icon :icon="['fas', 'receipt']" />
          Gerar Extrato
        </button>
      </div>
    </div>

    <!-- Exibir o saldo -->
    <div v-if="saldo >= 0 && extrato.length > 0" class="card mt-4">
      <div class="card-header">
        <h5>Saldo</h5>
      </div>
      <div class="card-body">
        <p class="fw-bold">{{ `Saldo atual: R$ ${saldo.toFixed(2)}` }}</p>
      </div>
    </div>

    <!-- Tabela para exibir o extrato -->
    <div v-if="extrato.length > 0" class="card mt-4">
      <div class="card-header text-center">
        <h5>Extrato</h5>
      </div>
      <div class="card-body">
        <table class="table table-striped text-center">
          <thead>
            <tr>
              <th>Data</th>
              <th>Transação</th>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Status</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(transacao, index) in extrato" :key="index">
              <td>{{ formatarData(transacao.data) }}</td>
              <td>{{ transacao.id }}</td>
              <td>{{ transacao.usuario.name }}</td>
              <td>{{ getTipoTransacao(transacao.tipo_id) }}</td>
              <td>{{ getStatusTransacao(transacao.status_id) }}</td>
              <td>{{ transacao.valor }}</td>
            </tr>
          </tbody>
        </table>
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
      filtro: "geral",
      extrato: [],
      saldo: 0,
    };
  },

  methods: {
    formatarData(data) {
      return new Date(data).toLocaleString();
    },

    getTipoTransacao(tipo_id) {
      return tipo_id === 3 ? "Depósito" : "Saque";
    },

    getStatusTransacao(status_id) {
      return status_id === 1 ? "Pendente" : "Concluída";
    },

    async gerarExtrato() {
      const usuarioExiste = await UsuarioService.getUsuarioId(this.usuario_id);
      if (!usuarioExiste) {
        Alert.showToast(
          "error",
          "Erro ao gerar extrato, Usuário não foi encontrado."
        );
        return;
      }
      if (this.usuario_id) {
        if (this.filtro === "geral") {
          this.extrato = await TransacaoService.getExtratoTransacoesUsuario(
            this.usuario_id
          );
        } else if (this.filtro === "deposito") {
          this.extrato = await TransacaoService.getExtratoDepositoUsuario(
            this.usuario_id
          );
        } else if (this.filtro === "saque") {
          this.extrato = await TransacaoService.getExtratoSaqueUsuario(
            this.usuario_id
          );
        }
        // Consultar o saldo
        this.consultarSaldo();
        return;
      } else {
        this.extrato = [];
        Alert.showToast("warning", "Atenção", "Informe o ID do usuário!");
      }
    },

    async consultarSaldo() {
      if (this.usuario_id) {
        this.saldo = await TransacaoService.getSaldoUsuario(this.usuario_id);
        console.log(this.saldo);
      } else {
        this.saldo = 0;
      }
    },
  },
};
</script>
