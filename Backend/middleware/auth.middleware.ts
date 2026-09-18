import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function AuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        ok: false,
        message: "required token",
      });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        ok: false,
        message: "required token",
      });
    }

    const secret = process.env.JWT_SECRET;

    if (!secret) {
      return res.status(500).json({
        ok: false,
        message: "JWT KEY NOT CONFIGURED",
      });
    }

    const decoded = jwt.verify(token, secret);
    req.user = typeof decoded === "string" ? { id: decoded } : decoded;

    next();
  } catch (err) {
    console.log(err);

    return res.status(401).json({
      ok: false,
      message: "Invalid token",
    });
  }
}
