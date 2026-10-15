export async function HandleLogin(email: string, pass: string) {
  const response = await window.api.auth.Login(email, pass);
  return response;
}

export async function handleInfoUser(token: string) {
  const response = await window.api.users.getinfoshow(token);
  return response;
}
