import type { Request, Response } from "express";
import { prisma } from "../DataBase/prisma.js";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export const AuthLogin = async (req: Request, res: Response) => {
  try {
    const { emailbody, pass } = req.body as {
      emailbody?: string;
      pass?: string;
    };

    if (!emailbody || !pass) {
      return res.status(404).json({
        ok: false,
        message: "Data is missing",
      });
    }

    const user = await prisma.user.findMany({
      where: { email: emailbody },
    });

    if (user.length === 0) {
      return res.status(404).json({
        ok: false,
        message: "User not found",
      });
    }
    const [credentials] = user;
    const isvalid = await bcrypt.compare(pass, credentials?.password ?? "");

    if (isvalid) {
      const secret = process.env.JWT_SECRET;
      if (!secret) {
        return res.status(400).json({
          ok: false,
          message: "JWT not configurated",
        });
      }

      const token = jwt.sign(
        {
          id: credentials?.User_id,
          role: credentials?.role,
        },
        secret,
        {
          expiresIn: "4h",
        },
      );

      return res.status(200).json({
        ok: true,
        token: token
      });
    }
    return res.status(401).json({
      ok: false,
      message: "Unauthorized",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      ok: false,
      message: err,
    });
  }
};
