import { RequestHandler } from "express";
import { LoginUserController } from "../controllers/singIn/login";
import { MongoLoginUserRepository } from "../repositories/mongo-repository/login";

export const loginRouter: RequestHandler = async (req, res) => {
  const mongoLoginUserRepository = await new MongoLoginUserRepository();

  const loginUserController = await new LoginUserController(
    mongoLoginUserRepository
  );

  const { body, statusCode } = await loginUserController.hendle(req);

  res.status(statusCode).json({ token: body });
};
