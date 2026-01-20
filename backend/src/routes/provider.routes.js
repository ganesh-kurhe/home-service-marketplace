import express from "express";
import { acceptBooking, rejectBooking } from "../controllers/provider.controller.js";

const router = express.Router();

router.post("/:id/accept", acceptBooking);
router.post("/:id/reject", rejectBooking);

export default router;
