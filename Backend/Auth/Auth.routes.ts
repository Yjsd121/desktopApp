import express from "express";
import * as controller from "./Auth.controller.js";

const router = express.Router();

router.post("/", controller.AuthLogin);

export default router
