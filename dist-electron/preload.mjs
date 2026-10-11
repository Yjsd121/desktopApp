let electron = require("electron");
//#region src/preload/preload.ts
electron.contextBridge.exposeInMainWorld("api", {
	ping: () => electron.ipcRenderer.invoke("app:ping"),
	users: {
		getall: () => electron.ipcRenderer.invoke("users:getall"),
		getbyEmail: (email, pass) => electron.ipcRenderer.invoke("users:getbyEmail", email, pass)
	}
});
//#endregion
