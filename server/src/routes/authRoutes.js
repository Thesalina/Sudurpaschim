import { Router } from "express";
import { getAdminProfile, loginAdmin } from "../controllers/authController.js";
import protectAdmin from "../middleware/protectAdmin.js";

const router = Router();

router.post("/login", loginAdmin);
router.get("/me", protectAdmin, getAdminProfile);

export default router;
