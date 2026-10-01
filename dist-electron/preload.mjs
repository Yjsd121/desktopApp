//#region src/preload/preload.ts
require("electron").contextBridge.exposeInMainWorld("api", {});
//#endregion
