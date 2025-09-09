import { Request, Response } from "express";
import { PurchaseService } from "./purchase.service";
import { ZodPurchaseValidation } from "./purchase.validation";

//purchase course
const purchaseCourse = async (req: Request, res: Response) => {
  const validatedData = ZodPurchaseValidation.parse(req.body);
  const userId = req.user.id;

  const result = await PurchaseService.purchaseCourse(userId, validatedData);
  res.status(200).json({
    success: true,
    message: "Course purchased successfully",
    result,
  });
};

//get purchased courses
const getPurchasedCourses = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const purchases = await PurchaseService.getPurchasedCourses(userId);
  res.status(200).json({
    success: true,
    message: "Purchased courses fetched successfully",
    purchases,
  });
};

export const PurchaseController = {
  purchaseCourse,
  getPurchasedCourses,
};
