import { Request, Response } from "express";
import { UserService } from "./user.service";
import { ZodUserValidation } from "./user.validation";

const signUp = async (req: Request, res: Response) => {
  const validatedData = ZodUserValidation.parse(req.body);
  const newUser = await UserService.signUp(validatedData);
  res.status(201).json({
    success: true,
    message: "Signed Up Successfully",
    newUser,
  });
};

export const UserController = {
  signUp,
};
