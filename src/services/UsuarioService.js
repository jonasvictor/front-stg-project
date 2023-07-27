/**
 * Arquivo responsável pelos métodos de requisição à API via HTTP.
 */

import Api from "./Api";

export default {
  // Método responsável por listar todos os usuários
  async getUsuarios() {
    try {
      const response = await Api().get("/usuarios");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  // Método responsável por criar um novo usuário
  async createUsuario(usuario) {
    try {
      const response = await Api().post("/usuarios", usuario);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  // Método responsável por listar um usuário específico pod ID
  async getUsuarioId(id) {
    try {
      const response = await Api().get(`/usuarios/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  // Método responsável por atualizar um usuário
  async updateUsuario(id, usuario) {
    try {
      const response = await Api().put(`/usuarios/${id}`, usuario);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  // Método responsável por excluir um usuário
  async deleteUsuario(id) {
    try {
      const response = await Api().delete(`/usuarios/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
