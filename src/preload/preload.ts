import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  ping: () => ipcRenderer.invoke("app:ping"),
  users: {
    getall: () => ipcRenderer.invoke("users:getall"),
    getbyEmail: (email: string, pass: string) =>
      ipcRenderer.invoke("users:getbyEmail", email, pass),
  },
});
