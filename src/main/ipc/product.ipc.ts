import { ipcMain } from "electron";
import { CreateP, GetallProducts } from "../repositories/product.repository";
import { getSession } from "../auth/session.manager";
import type { Producttype } from "../../renderer/Types/type";

export function RegisterProdutipc() {
  ipcMain.handle("product:getallproducts", async (_event, token: string) => {
    try {
      const Isvalid = getSession(token);

      if (!Isvalid) {
        return {
          success: false,
          message: "invalid token",
        };
      }

      const getallProducts = await GetallProducts();

      if (!getallProducts) {
        return {
          success: false,
          message: "not found",
        };
      }
      return {
        success: true,
        message: "data found",
        data: getallProducts,
      };
    } catch (err) {
      console.log(err);
    }
  });
  ipcMain.handle(
    "product:createproducts",
    async (_event, token: string, Product: Producttype) => {
      try {
        const Isvalid = getSession(token);

        if (!Isvalid) {
          return {
            sucess: false,
            message: "invalid token",
          };
        }

        await CreateP(Product);

        return {
          success: false,
          message: "Product Create",
        };
      } catch (err) {
        console.log(err);
      }
    },
  );
}
