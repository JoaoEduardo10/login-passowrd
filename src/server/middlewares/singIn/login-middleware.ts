import { RequestHandler } from "express";
import { ILoginUser } from "../../controllers/singIn/protocols";
import { Bad_Request, Not_Found } from "../../helpers/types-errors";
import { validatePasswordCrypt } from "../../helpers/passowordBcript";
import { User } from "../../models/mongo-models/User";

export const loginMiddleware: RequestHandler<{}, {}, ILoginUser> = async (
  req,
  _res,
  next
) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Not_Found("Email or password is required!");
  }

  const filds: (keyof ILoginUser)[] = ["email", "password"];

  const verifyFildsAll = Object.keys(req.body).some(
    (key) => !filds.includes(key as keyof ILoginUser)
  );

  if (verifyFildsAll) {
    throw new Not_Found("Somente os campos de email e passowd.");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new Bad_Request("Email esta incorreto");
  }

  const validatePassword = await validatePasswordCrypt(password, user.email);

  if (!validatePassword) {
    throw new Bad_Request("senha invalida!");
  }

  next();
};
