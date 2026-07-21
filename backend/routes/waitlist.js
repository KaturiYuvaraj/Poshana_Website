import express from "express";
import { sendWaitlistEmail } from "../controllers/waitlistController.js";

const router = express.Router();

router.post("/", sendWaitlistEmail);

export default router;
