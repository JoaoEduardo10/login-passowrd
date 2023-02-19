import "express-async-errors";
import express from "express";
import { globalErroMiddleware } from "./middlewares/global-error";
import "dotenv/config";

const server = express();

server.use(express.json());
server.use(globalErroMiddleware);

export { server };
