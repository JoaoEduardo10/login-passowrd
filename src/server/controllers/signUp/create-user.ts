import { StatusCodes } from "http-status-codes";
import { IControllers, IHttpRequest, IHttpResponse } from "../protocols";
import { ICreateUserParams, ICreateUserRepositpry } from "./protocols";

export class CreateUserController implements IControllers {
  constructor(private readonly createUserRepository: ICreateUserRepositpry) {}

  async hendle(req: IHttpRequest<ICreateUserParams>): Promise<IHttpResponse> {
    const { email, name, password } = req.body as ICreateUserParams;

    const user = await this.createUserRepository.create({
      email,
      name,
      password,
    });

    return {
      body: user,
      statusCode: StatusCodes.OK,
    };
  }
}
