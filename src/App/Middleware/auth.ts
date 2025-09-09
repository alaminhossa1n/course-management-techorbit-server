import { NextFunction, Request, Response, RequestHandler } from "express";
import AppError from "../Errors/AppError";
import jwt from "jsonwebtoken";
import UserModel from "../Modules/User/user.model";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const auth = (...roles: string[]): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      throw new AppError(401, "Unauthorized");
    }
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as jwt.JwtPayload;

    const user = await UserModel.findById(decoded.id);
    if (!user) {
      throw new AppError(401, "Unauthorized");
    }

    if (!roles.includes(user.role)) {
      throw new AppError(401, "Unauthorized");
    }
    req.user = { id: user._id, email: user.email, role: user.role };
    next();
  };
};
export default auth;
