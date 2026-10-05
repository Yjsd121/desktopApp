let electron = require("electron");
//#region src/preload/preload.ts
electron.contextBridge.exposeInMainWorld("api", { ping: () => electron.ipcRenderer.invoke("app:ping") });
//#endregion
