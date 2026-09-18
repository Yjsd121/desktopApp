import type { Request, Response } from "express";
import { prisma } from "../DataBase/prisma.js";

export async function GetMe(req: Request, res: Response) {
  try {
    if (!req.user?.id) {
      return res.status(401).json({
        ok: false,
        message: "token undecoded",
      });
    }
    const InfoMe = await prisma.user.findMany({
      select: {
        username: true,
        email: true,
        role: true,
      },
      where: { User_id: req.user.id },
    });

    if (!InfoMe) {
      return res.status(404).json({
        ok: false,
        message: "Not found",
      });
    }
    res.status(200).json({
      ok: true,
      Data: InfoMe,
    });
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      ok: false,
      message: "Error",
    });
  }
}
