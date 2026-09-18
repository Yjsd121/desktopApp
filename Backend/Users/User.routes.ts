import express from "express";
import * as controller from "./User.controller.js";
const router = express.Router();

router.get("/getme", controller.GetMe);

export default router;
