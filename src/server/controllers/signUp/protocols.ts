import { IUser } from "../../models/user";

export interface ICreateUserParams {
  name: string;
  email: string;
  password: string;
}

export interface ICreateUserRepositpry {
  create(params: ICreateUserParams): Promise<IUser>;
}
