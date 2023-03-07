import express, { json } from "express";
import { router } from "./routes";
import cors from "cors";
require("dotenv").config();

const PORT = process.env.PORT || "3003";
const app = express();

app.use(cors());
app.use(json());
app.use(router);

app.listen(PORT, async () => {
  console.info(`⚡️Server is running at http://localhost:${PORT}/docs`);
});
