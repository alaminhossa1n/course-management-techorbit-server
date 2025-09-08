import AppError from "../../Errors/AppError";
import UserModel from "./user.model";
import { TUser } from "./user.validation";

const signUp = async (user: TUser) => {
  const existingUser = await UserModel.findOne({ email: user.email });
  if (existingUser) {
    throw new AppError(400, "User with this email already exists");
  }

  const created = await UserModel.create(user);
  const newUser = await UserModel.findById(created._id).lean();
  return newUser;
};

export const UserService = {
  signUp,
};
