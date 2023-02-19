import { IUser } from "../models/user";

export interface IHttpResponse {
  statusCode: number;
  body: IUser | IUser[] | string;
}

export interface IHttpRequest<B> {
  params?: any;
  headers?: any;
  body?: B;
}

export interface IControllers {
  hendle(req: IHttpRequest<unknown>): Promise<IHttpResponse>;
}
