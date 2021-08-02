import { User } from ".././../infra/typeorm/entities/User/User.entity";
import { Router } from "express";
import UserController from "../controllers/UserController";
import { makeValidateBody } from "../helpers/validator/makeValidateBody";
const router = Router();

router.post("/user", makeValidateBody(User), UserController.create);
router.get("/user", UserController.findAll);
router.get("/user/:id", UserController.findOne);

export default router;
