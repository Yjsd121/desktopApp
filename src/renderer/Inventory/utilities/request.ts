import { APIURL } from "../../API/apis";

export async function getProducts(token: string) {
  const response = await fetch(`${APIURL}/Inventory`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });

  return response;
}
