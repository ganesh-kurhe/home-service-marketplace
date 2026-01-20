import express from "express";
import { overrideStatus } from "../controllers/admin.controller.js";

const router = express.Router();

router.patch("/:id/override", overrideStatus);

export default router;
