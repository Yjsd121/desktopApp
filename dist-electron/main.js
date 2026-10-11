import { BrowserWindow, app, ipcMain } from "electron";
import path from "node:path";
import { fileURLToPath } from "node:url";
//#region src/main/ipc/app.ipc.ts
function registerAppIPC() {
	ipcMain.handle("app:ping", () => {
		return "pong";
	});
}
//#endregion
//#region src/main/repositories/user.repository.ts
async function getAllusers() {}
async function getbyEmail(UserEmail, UserPass) {
	console.log("Searching user:", UserEmail);
	try {
		const user = {
			email: "yadetjsd@gmail.com",
			password: "yaderjsd348d"
		};
		if (!user) return {
			ok: false,
			token: "malo"
		};
		if (user.password !== UserPass) return {
			ok: false,
			token: "malo"
		};
		return {
			ok: true,
			token: "bien"
		};
	} catch (error) {
		console.error("Prisma query failed:", error);
		throw error;
	}
}
//#endregion
//#region src/main/ipc/user.ipc.ts
function RegisterUsersIpc() {
	ipcMain.handle("users:getall", async () => {
		return await getAllusers();
	});
	ipcMain.handle("users:getbyEmail", async (_event, email, pass) => {
		try {
			return await getbyEmail(email, pass);
		} catch (error) {
			console.log("error in user:getbyEmail", error);
		}
	});
}
//#endregion
//#region src/main/main.tsx
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
function createWindow() {
	const window = new BrowserWindow({
		width: 1400,
		height: 900,
		webPreferences: {
			preload: path.join(__dirname, "preload.mjs"),
			contextIsolation: true,
			nodeIntegration: false
		}
	});
	if (process.env.VITE_DEV_SERVER_URL) window.loadURL(process.env.VITE_DEV_SERVER_URL);
	else window.loadFile(path.join(__dirname, "../dist/index.html"));
}
app.whenReady().then(() => {
	registerAppIPC();
	RegisterUsersIpc();
	createWindow();
	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
//#endregion
export {};
