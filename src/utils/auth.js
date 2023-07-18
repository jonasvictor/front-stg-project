export function isAuthenticated() {
  // Obtém o token de autenticação do localStorage
  const token = localStorage.getItem("token");

  // Verifica se o token está presente e válido
  return token !== null;
}
