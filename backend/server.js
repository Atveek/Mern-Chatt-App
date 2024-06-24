import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoute from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";
import userRoute from "./routes/user.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth/", authRoute);
app.use("/api/message/", messageRoute);
app.use("/api/user/", userRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectToMongoDB();
});
