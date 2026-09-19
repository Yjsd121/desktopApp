import type { Response, Request } from "express";
import { prisma } from "../DataBase/prisma.js";

export async function GetAllProducts(req: Request, res: Response) {
  try {
    if (!req.user?.id) {
      return res.status(401).json({
        ok: false,
        message: "token undecoded",
      });
    }
    const Allproducts = await prisma.product.findMany();
    if (!Allproducts) {
      return res.status(400).json({
        ok: false,
        message: "Not found products",
      });
    }
    res.status(200).json({
      ok: true,
      Allproducts,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      ok: false,
      message: err,
    });
  }
}
