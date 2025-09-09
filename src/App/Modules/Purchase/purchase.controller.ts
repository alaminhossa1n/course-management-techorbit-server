import { Request, Response } from "express";
import { PurchaseService } from "./purchase.service";
import { ZodPurchaseValidation } from "./purchase.validation";

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

export const PurchaseController = {
  purchaseCourse,
};
