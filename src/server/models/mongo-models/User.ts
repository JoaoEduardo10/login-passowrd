import { model, Schema } from "mongoose";
import { IUser } from "../user";

const User = model(
  "Users",
  new Schema<Omit<IUser, "id">>({
    name: {
      type: String,
      required: true,
      min: 3,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  })
);

export { User };
