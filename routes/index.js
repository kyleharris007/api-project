import { Router } from "express";
import housesRoutes from "./houses.js";
import charactersRoutes from "./characters.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is the api root!");
});

router.use("/houses", housesRoutes);
router.use("/characters", charactersRoutes);

export default router;