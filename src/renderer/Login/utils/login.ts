import { APIURL } from "../../API/apis";
export async function HandleLogin(email: string, pass: string) {
  const response = await fetch(`${APIURL}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      emailbody: email,
      pass: pass,
    }),
  });

  return response;
}

export async function handleInfoUser(token: string) {
  const response = await fetch(`${APIURL}/User/getme`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data.InfoMe[0];
}
