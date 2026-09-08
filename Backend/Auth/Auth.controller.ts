import type { Request, Response } from "express";

import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export const AuthLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as {
      email?: string;
      password?: string;
    };

    if (!email || !password) {
      res.status(404).json({
        ok: false,
        message: "Data is missing",
      });
    }
    
    // aquí ira la petición a la base de datos 
    const user = {
      email: "admin",
      password: "admin",
    };


  } catch (err) {
    console.log(err);
    res.status(400).json({
      ok: false,
      message: err,
    });
  }
};
