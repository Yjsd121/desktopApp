import { ipcMain } from "electron";
import { getAllusers, getbyEmail } from "../repositories/user.repository";

export function RegisterUsersIpc() {
  ipcMain.handle("users:getall", async () => {
    return await getAllusers();
  });
  ipcMain.handle(
    "users:getbyEmail",
    async (_event, email: string, pass: string) => {
      try {
        return await getbyEmail(email, pass);
      } catch (error) {
        console.log("error in user:getbyEmail", error);
      }
    },
  );
}
