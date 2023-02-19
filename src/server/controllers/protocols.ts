import { IUser } from "../models/user";

export interface IToken {
  token: string;
}

export interface IHttpResponse {
  statusCode: number;
  body: IUser | IUser[] | IToken;
}

export interface IHttpRequest<B> {
  params?: any;
  headers?: any;
  body?: B;
}

export interface IControllers {
  hendle(req: IHttpRequest<unknown>): Promise<IHttpResponse>;
}
