let electron = require("electron");
//#region src/preload/preload.ts
electron.contextBridge.exposeInMainWorld("api", {
	ping: () => electron.ipcRenderer.invoke("app:ping"),
	auth: { Login: (email, pass) => electron.ipcRenderer.invoke("auth:login", email, pass) },
	users: {
		getall: () => electron.ipcRenderer.invoke("users:getall"),
		getinfoshow: (token) => electron.ipcRenderer.invoke("users:getinfoshow", token)
	}
});
//#endregion
