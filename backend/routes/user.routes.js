import express from "express";
import { getUserForSidebar } from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

router.get("/", protectRoute,getUserForSidebar);
router.post("/send/:id", protectRoute, );

export default router;
