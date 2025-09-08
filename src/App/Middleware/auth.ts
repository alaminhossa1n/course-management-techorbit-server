import { NextFunction, Request, Response, RequestHandler } from "express";
import AppError from "../Errors/AppError";
import jwt from "jsonwebtoken";
import { TUser } from "../Modules/User/user.validation";

declare global {
  namespace Express {
    interface Request {
      user?: Partial<TUser>;
    }
  }
}

const auth = (...roles: string[]): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      throw new AppError(401, "Unauthorized");
    }
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as jwt.JwtPayload;

    if (!roles.includes(decoded.role as string)) {
      if (!decoded.role || !roles.includes(decoded.role as string)) {
        throw new AppError(401, "Unauthorized");
      }
      // Ensure decoded has the correct shape for TUser
      req.user = {
        name: (decoded as any).name,
        email: (decoded as any).email,
        role: decoded.role as "admin" | "user",
      };
    }
    next();
  };
};
export default auth;
