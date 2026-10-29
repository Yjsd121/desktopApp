import type { Appresponse } from "./response.type";
import type { loginSucess, Producttype } from "./type";

export {};

declare global {
  interface Window {
    api: {
      ping: () => Promise<string>;
      auth: { Login: (email, pass) => Promise<Appresponse> };
      users: {
        getAll: () => Promise<unknown[]>;
        getinfoshow: (token: string) => Promise<Appresponse>;
      };
      products: {
        getallproducts: (token: string) => Promise<Appresponse>;
        creteproduct: (
          token: string,
          product: Producttype,
        ) => Promise<Appresponse>;
      };
    };
  }
}
