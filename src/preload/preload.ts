import { contextBridge, ipcRenderer } from "electron";
import type { Producttype } from "../renderer/Types/type";

contextBridge.exposeInMainWorld("api", {
  ping: () => ipcRenderer.invoke("app:ping"),
  auth: {
    Login: (email: string, pass: string) =>
      ipcRenderer.invoke("auth:login", email, pass),
  },
  users: {
    getall: () => ipcRenderer.invoke("users:getall"),
    getinfoshow: (token: string) =>
      ipcRenderer.invoke("users:getinfoshow", token),
  },
  products: {
    getallproducts: (token: string) =>
      ipcRenderer.invoke("product:getallproducts", token),
    createproduct: (token: string, product: Producttype) =>
      ipcRenderer.invoke("product:createProduct", token, product),
  },
});
