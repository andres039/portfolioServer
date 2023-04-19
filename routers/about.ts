import { Router } from "express";
import about from "../about.json";

const router = Router();
router.get("/about", (req, res) => {
  res.json(about);
});

export default router;
