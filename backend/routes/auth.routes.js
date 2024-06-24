import express from "express";
import {
  SignupUser,
  loginUser,
  logoutUser,
} from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup", SignupUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

export default router;
