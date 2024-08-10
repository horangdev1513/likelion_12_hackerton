export function getToken() {
  const token = sessionStorage.getItem('token');

  return token;
}

export function logout() {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('userInfo');
}
