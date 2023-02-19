import { Router } from "express";
import { loginMiddleware } from "./middlewares/singIn/login-middleware";
import { createMiddleware } from "./middlewares/singUp/create-middleware";
import { createRouter } from "./UseCases/create-user";
import { loginRouter } from "./UseCases/login";

const router = Router();

router.post("/users", createMiddleware, createRouter);
router.post("/login", loginMiddleware, loginRouter);

export { router };
