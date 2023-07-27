/**
 * Arquivo responsável por inicializar o Axios e as requisições da aplicação com o backend.
 */

import axios from "axios";

export default () =>
  axios.create({
    // baseURL se comunica com o backend
    baseURL: "http://localhost:3030/",
  });
