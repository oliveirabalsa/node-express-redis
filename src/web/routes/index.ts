import { Router } from "express";
import UserController from "../controllers/UserController";
const router = Router();

router.post("/user", UserController.create);
router.get("/user", UserController.findAll);

export default router;
