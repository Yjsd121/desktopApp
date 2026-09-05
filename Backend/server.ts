import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    ok: true,
    message: "Hola",
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening in http://localhost:${port}`);
});
