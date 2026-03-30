import { Router } from "express";
import {
  createCulturePost,
  deleteCulturePost,
  getCulturePostById,
  getCulturePosts,
  updateCulturePost,
} from "../controllers/cultureController.js";
import protectAdmin from "../middleware/protectAdmin.js";

const router = Router();

router.get("/", getCulturePosts);
router.get("/:cultureId", getCulturePostById);
router.post("/", protectAdmin, createCulturePost);
router.put("/:cultureId", protectAdmin, updateCulturePost);
router.delete("/:cultureId", protectAdmin, deleteCulturePost);

export default router;
