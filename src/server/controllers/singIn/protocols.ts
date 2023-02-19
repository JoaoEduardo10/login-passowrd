import { IUser } from "../../models/user";

export interface ILoginUser {
  email: string;
  password: string;
}

export interface ILoginUserRepository {
  login(email: string): Promise<IUser>;
}
