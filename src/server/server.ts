import "express-async-errors";
import express from "express";
import { globalErroMiddleware } from "./middlewares/global-error";
import "dotenv/config";
import { router } from "./router";

const server = express();

server.use(express.json());
server.use(router);

server.use(globalErroMiddleware);
export { server };
