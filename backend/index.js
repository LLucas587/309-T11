import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./routes.js";
// TODO: complete me (loading the necessary packages)

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
const app = express();

app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json());
app.use('', routes);

export default app;