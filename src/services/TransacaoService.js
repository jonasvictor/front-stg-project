import Api from "./Api";

export default {
  // Método responsável por fazer um depósito
  async createDeposito(valor, usuario_id) {
    try {
      const response = await Api().post(
        `/transacoes/deposito`,
        valor,
        usuario_id
      );
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  // Método responsável por fazer um saque
  async createSaque(valor, usuario_id) {
    try {
      const response = await Api().post(`/transacoes/saque`, valor, usuario_id);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  // Método responsável por ver o saldo do usuário
  async getSaldoUsuario(usuario_id) {
    try {
      const response = await Api().get(`/saldo/${usuario_id}`);
      return response.data.saldo;
    } catch (error) {
      console.log(error);
    }
  },

  // Médoto responsável por ver o extrato geral do usuário
  async getExtratoTransacoesUsuario(usuario_id) {
    try {
      const response = await Api().get(`/extrato/${usuario_id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  // Médoto responsável por ver o extrato de depósito do usuário
  async getExtratoDepositoUsuario(usuario_id) {
    try {
      const response = await Api().get(`/extrato/deposito/${usuario_id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  // Médoto responsável por ver o extrato de saque do usuário
  async getExtratoSaqueUsuario(usuario_id) {
    try {
      const response = await Api().get(`/extrato/saque/${usuario_id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
