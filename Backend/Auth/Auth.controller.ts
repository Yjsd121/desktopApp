import type { Request, Response } from "express";
import { prisma } from "../DataBase/prisma.js";

// import jwt from "jsonwebtoken";

// import * as bcrypt from "bcrypt";

export const AuthLogin = async (req: Request, res: Response) => {
  try {
    const { emailbody, pass } = req.body as {
      emailbody?: string;
      pass?: string;
    };

    if (!emailbody || !pass) {
      res.status(404).json({
        ok: false,
        message: "Data is missing",
      });
    }

    const user = await prisma.user.findMany()

    return res.status(200).json({
      ok: true,
      message: user,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      ok: false,
      message: err,
    });
  }
};
