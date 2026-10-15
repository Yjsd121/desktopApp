import { ipcMain } from "electron";
import { getAllusers, getinfoshow } from "../repositories/user.repository";
import { getSession } from "../auth/session.manager";

export function RegisterUsersIpc() {
  ipcMain.handle("users:getall", async () => {
    return await getAllusers();
  });
  ipcMain.handle("users:getinfoshow", async (_event, token: string) => {
    try {
      const id = await getSession(token);
      if (!id) {
        return {
          success: false,
          message: "Invalid token",
        };
      }
      return await getinfoshow(id.user_id);
    } catch (error) {
      console.log("error in user:getbyEmail", error);
    }
  });
}
