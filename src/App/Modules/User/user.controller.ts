import { Request, Response } from "express";
import { UserService } from "./user.service";
import { ZodUserSignInValidation, ZodUserValidation } from "./user.validation";

// Sign Up
const signUp = async (req: Request, res: Response) => {
  const validatedData = ZodUserValidation.parse(req.body);
  const newUser = await UserService.signUp(validatedData);
  res.status(201).json({
    success: true,
    message: "Signed Up Successfully",
    newUser,
  });
};

// Sign In
const signIn = async (req: Request, res: Response) => {
  const validatedData = ZodUserSignInValidation.parse(req.body);
  const user = await UserService.signIn(validatedData);
  res.status(200).json({
    success: true,
    message: "Signed In Successfully",
    ...user,
  });
};

export const UserController = {
  signUp,
  signIn,
};
