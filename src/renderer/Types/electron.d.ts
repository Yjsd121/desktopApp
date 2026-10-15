import type { Appresponse } from "./response.type";
import type { loginSucess } from "./type";

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
    };
  }
}
