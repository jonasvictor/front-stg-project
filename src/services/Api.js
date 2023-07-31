import axios from "axios";

export default () =>
  axios.create({
    // Comunicaçaõ com o backend
    baseURL: "http://localhost:3030/",
  });
