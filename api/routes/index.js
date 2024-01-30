// routes/index.js
import express from "express";
import authRoutes from "./auth.route.js";
import chatRoutes from "./chat.route.js";

const router = express.Router();

// Define your routes
router.use("/api/auth", authRoutes);
router.use("/api/chat", chatRoutes);

export default router;
