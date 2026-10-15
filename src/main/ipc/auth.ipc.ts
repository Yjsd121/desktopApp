import { ipcMain } from "electron";
import { Login } from "../repositories/auth.reository";

export function AuthIpc() {
  ipcMain.handle("auth:login", async (_event, email: string, pass: string) => {
    try {
      return await Login(email, pass);
    } catch (err) {
      console.log(err);
    }
  });
}
