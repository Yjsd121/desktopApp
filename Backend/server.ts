import "dotenv/config";
import express from "express";
import cors from "cors";

import AuthRoutes from "./Auth/Auth.routes.js";
import { AuthMiddleware } from "./middleware/auth.middleware.js";
import UserRoutes from "./Users/User.routes.js";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/", AuthRoutes);
app.use(AuthMiddleware);
app.use("/User", UserRoutes);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening in http://localhost:${port}`);
});
