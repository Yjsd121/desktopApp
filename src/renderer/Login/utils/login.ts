export async function HandleLogin(email: string, pass: string) {
  const response = await window.api.users.getbyEmail(email, pass);

  return response;
}

export async function handleInfoUser(token: string) {
  return;
}
