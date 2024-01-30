import express from "express";
import { fetchMessages, sendMessages } from "../controller/chat.controller.js";

const router = express.Router();

// ------ Chat- router
router.post("/send/messages", sendMessages);
router.post("/fetch/messages", fetchMessages);

export default router;
