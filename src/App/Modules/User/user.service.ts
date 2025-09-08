import jwt from "jsonwebtoken";
import AppError from "../../Errors/AppError";
import UserModel from "./user.model";
import { TUser, TUserSignIn } from "./user.validation";
import bcrypt from "bcrypt";

// Sign Up
const signUp = async (user: TUser) => {
  const existingUser = await UserModel.findOne({ email: user.email });
  if (existingUser) {
    throw new AppError(400, "User with this email already exists");
  }

  const created = await UserModel.create(user);
  const newUser = await UserModel.findById(created._id).lean();
  return newUser;
};

// Sign In
const signIn = async (user: TUserSignIn) => {
  const existingUser = await UserModel.findOne({ email: user.email }).select(
    "+password"
  );

  if (!existingUser) {
    throw new AppError(400, "User with this email does not exist");
  }

  const isPasswordCorrect = await bcrypt.compare(
    user.password,
    existingUser.password as string
  );

  if (!isPasswordCorrect) {
    throw new AppError(400, "Invalid password");
  }

  const jwtPayload = {
    _id: existingUser?._id,
    email: existingUser?.email,
  };

  const accessToken = jwt.sign(jwtPayload, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });

  return { user: existingUser, token: accessToken };
};

export const UserService = {
  signUp,
  signIn,
};
