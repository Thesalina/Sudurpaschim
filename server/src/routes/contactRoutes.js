import { Router } from "express";
import {
  createContactMessage,
  getContactMessages,
} from "../controllers/contactController.js";

const router = Router();

router.get("/", getContactMessages);
router.post("/", createContactMessage);

export default router;
