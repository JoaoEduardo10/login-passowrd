import { Request, Response } from "express";
import { CreateUserController } from "../controllers/signUp/create-user";
import { MongoCreateUserRepository } from "../repositories/mongo-repository/create-user";

export const createRouter = async (req: Request, res: Response) => {
  const mongoCreateUserRepository = await new MongoCreateUserRepository();

  const createUserController = await new CreateUserController(
    mongoCreateUserRepository
  );

  const { body, statusCode } = await createUserController.hendle(req);

  res.status(statusCode).json(body);
};
