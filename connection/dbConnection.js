import mongoose from "mongoose";
import env from "dotenv";

env.config();

mongoose.connect(process.env.mongoUrl);

const db = mongoose.connection;

db.on("error", (err) => {
  console.error.bind(console, err, "connection error:");
  process.exit(1);
});
db.on("connected", () => {
  console.log("Connected to MongoDB");
});

export default db;
