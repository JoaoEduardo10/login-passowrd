import { RequestHandler } from "express";
import { ICreateUserParams } from "../../controllers/signUp/protocols";
import { Bad_Request, Not_Found } from "../../helpers/types-errors";
import { User } from "../../models/mongo-models/User";

export const createMiddleware: RequestHandler = async (req, _res, next) => {
  const { email, name, password } = req.body as ICreateUserParams;

  const validateFilds: (keyof ICreateUserParams)[] = [
    "email",
    "name",
    "password",
  ];

  const validateAllFilds = Object.keys(req.body).some(
    (key) => !validateFilds.includes(key as keyof ICreateUserParams)
  );

  if (validateAllFilds) {
    throw new Not_Found(
      "Somente os capos de name, email e password são permitidos"
    );
  }

  const user = await User.findOne({ email });

  if (user) throw new Not_Found("Este email já esta cadastrado.");

  if (!email || !name || !password) {
    throw new Bad_Request("Adicione name, email e passoword!");
  }

  next();
};
