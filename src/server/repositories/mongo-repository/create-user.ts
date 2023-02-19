import {
  ICreateUserParams,
  ICreateUserRepositpry,
} from "../../controllers/signUp/protocols";
import { createCrypt } from "../../helpers/passowordBcript";
import { Internal_Server_Error } from "../../helpers/types-errors";
import { User } from "../../models/mongo-models/User";
import { IUser } from "../../models/user";

export class MongoCreateUserRepository implements ICreateUserRepositpry {
  async create(params: ICreateUserParams): Promise<IUser> {
    const { email, name, password } = params;

    const passwordHash = await createCrypt(password);

    const user = await User.create({
      email,
      name,
      password: passwordHash,
    });

    if (!user) throw new Internal_Server_Error("Usuario não criado");

    const {
      _id,
      name: userName,
      password: newPassoword,
      email: newEmail,
    } = user;

    return {
      id: _id.toHexString(),
      name: userName,
      password: newPassoword,
      email: newEmail,
    };
  }
}
