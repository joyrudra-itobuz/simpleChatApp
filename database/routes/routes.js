import express from "express";
import cors from "cors";
import env from "dotenv";
import * as auth from "../auth/auth.js";

export const app = new express();

app.get("", (req, res) => {
  res.send("Hello World");
});
