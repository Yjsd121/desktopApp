import { ipcMain } from "electron";

export function registerAppIPC() {
  ipcMain.handle("app:ping", () => {
    return "pong";
  });
}
