import express from "express";
import cors from "cors";
import env from "dotenv";
import db from "./connection/dbConnection.js";
import * as Router from "./database/routes/routes.js";

const app = new express();

app.use(express.json());

// app.use("/api", Router.app);

env.config();

app.use(cors());

console.log(process.env.PORT);

app.use((req, res, next) => {
  next(new Error("Not Found"));
});

app.use((err, req, res, next) => {
  if (err) {
    res.status(404).send({
      data: null,
      message: err.message,
      success: false,
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
