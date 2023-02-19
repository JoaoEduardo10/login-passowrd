import { StatusCodes } from "http-status-codes";
import { IControllers, IHttpRequest, IHttpResponse } from "../protocols";
import { ILoginUser, ILoginUserRepository } from "./protocols";
import jwt from "jsonwebtoken";

export class LoginUserController implements IControllers {
  constructor(private readonly loginUserRepository: ILoginUserRepository) {}

  async hendle(req: IHttpRequest<ILoginUser>): Promise<IHttpResponse> {
    const { email } = req.body as ILoginUser;

    const user = await this.loginUserRepository.login(email);

    const token = jwt.sign({ id: user.id, name: user.name }, "domigão", {
      expiresIn: "24h",
    });

    return {
      body: token,
      statusCode: StatusCodes.OK,
    };
  }
}
