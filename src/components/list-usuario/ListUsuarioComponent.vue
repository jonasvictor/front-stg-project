<template>
  <div>
    <h3 class="text-center">Lista de Todos os Usuários</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="text-center">ID</th>
          <th class="text-center">Nome do Usuário</th>
          <th class="text-center">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td class="text-center">{{ usuario.id }}</td>
          <td class="text-center">{{ usuario.name }}</td>
          <td class="text-center">{{ usuario.email }}</td>
          <td>
            <router-link
              :to="{ name: 'editar-usuario', params: { id: usuario.id } }"
              class="btn btn-success"
              ><font-awesome-icon :icon="['fas', 'user-pen']" />
              Editar
            </router-link>
          </td>
          <td>
            <button @click="removeUsuario(usuario.id)" class="btn btn-danger">
              <font-awesome-icon :icon="['fas', 'trash']" />
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UsuarioService from "../../services/UsuarioService";

export default {
  name: "ListUsuarioComponent",

  data() {
    return {
      usuarios: [],
    };
  },

  mounted() {
    this.listTodosUsuarios();
  },

  methods: {
    async listTodosUsuarios() {
      const response = await UsuarioService.getUsuarios();
      this.usuarios = response;
      console.log(response);
    },

    async removeUsuario(id) {
      await UsuarioService.deleteUsuario(id);
      this.listTodosUsuarios();
    },
    // deleteUsuario(id) {
    //   UsuarioService.deleteUsuario(id)
    //     .then((response) => {
    //       this.listTodosUsuarios();
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
  },
};
</script>
