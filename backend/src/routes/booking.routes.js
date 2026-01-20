import express from "express";
import {
  createBooking,
  assignProvider,
  updateStatus,
  cancelBooking,
  getHistory,
  getBooking
} from "../controllers/booking.controller.js";

const router = express.Router();

router.post("/", createBooking);
router.post("/:id/assign", assignProvider);
router.patch("/:id/status", updateStatus);
router.post("/:id/cancel", cancelBooking);
router.get("/:id/history", getHistory);
router.get("/:id", getBooking);


export default router;
