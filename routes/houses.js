import { Router } from "express";
import * as controllers from "../controllers/houses.js";

const router = Router();

router.get("/", controllers.getHouses);
router.get("/:id", controllers.getHouse);
router.post("/", controllers.createHouse);
router.put("/:id", controllers.updateHouse);
router.delete("/:id", controllers.deleteHouse);

export default router;