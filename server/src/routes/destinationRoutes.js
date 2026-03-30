import { Router } from "express";
import {
  createDestination,
  deleteDestination,
  getDestinationById,
  getDestinations,
  updateDestination,
} from "../controllers/destinationController.js";
import protectAdmin from "../middleware/protectAdmin.js";

const router = Router();

router.get("/", getDestinations);
router.get("/:destinationId", getDestinationById);
router.post("/", protectAdmin, createDestination);
router.put("/:destinationId", protectAdmin, updateDestination);
router.delete("/:destinationId", protectAdmin, deleteDestination);

export default router;
