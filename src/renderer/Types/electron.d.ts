import type { loginSucess } from "./type";

export {};

declare global {
  interface Window {
    api: {
      ping: () => Promise<string>;
      users: {
        getAll: () => Promise<unknown[]>;
        getbyEmail: (email: string, pass: string) => Promise<loginSucess>;
      };
    };
  }
}
