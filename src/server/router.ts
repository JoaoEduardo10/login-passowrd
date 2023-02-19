import { Router } from "express";
import { createMiddleware } from "./middlewares/singUp/create-middleware";
import { createRouter } from "./UseCases/create-user";

const router = Router();

router.post("/users", createMiddleware, createRouter);

export { router };
