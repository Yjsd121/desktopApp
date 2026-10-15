import { contextBridge, ipcRenderer } from "electron";

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
});
