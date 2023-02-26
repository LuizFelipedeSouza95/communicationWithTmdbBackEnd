import express, { json } from "express";
import { router } from "./routes";
import cors from 'cors'
require("dotenv").config();

const PORT = process.env.PORT || "3003";
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  app.use(cors());
  next();
})

app.use(json());
app.use(router);

app.listen(PORT, async () => {
  console.info(
    `⚡️Server is running at http://localhost:${PORT}`
  );
});