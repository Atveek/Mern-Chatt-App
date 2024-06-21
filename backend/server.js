import express from "express";
import dotenv from "dotenv";

import authRoute from "./routes/auth.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth/", authRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
