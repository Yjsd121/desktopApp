import type { Appresponse } from "../../Types/response.type";
import type { ListProcuts } from "../../Types/type";

export async function getProducts(token: string) {
  const response: Appresponse<ListProcuts> =
    await window.api.products.getallproducts(token);
  return response;
}
