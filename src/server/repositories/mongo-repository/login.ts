import { ILoginUserRepository } from "../../controllers/singIn/protocols";
import { Internal_Server_Error } from "../../helpers/types-errors";
import { User } from "../../models/mongo-models/User";
import { IUser } from "../../models/user";

export class MongoLoginUserRepository implements ILoginUserRepository {
  async login(email: string): Promise<IUser> {
    const user = await User.findOne({ email });

    if (!user) throw new Internal_Server_Error("Error no banco de dados!");

    const { _id, name, password, email: newEmail } = user;

    return { id: _id.toHexString(), name, password, email: newEmail };
  }
}
