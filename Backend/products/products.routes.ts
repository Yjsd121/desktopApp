import express from "express";
import * as controller from "./products.controller.js";

const router = express.Router();

router.get("/", controller.GetAllProducts);

export default router;
