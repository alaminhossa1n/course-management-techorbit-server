import { Router } from "express";
import { PurchaseController } from "./purchase.controller";
import auth from "../../Middleware/auth";

const router = Router();

router.post(
  "/make-purchase",
  auth("user", "admin"),
  PurchaseController.purchaseCourse
);

router.get("/me", auth("user", "admin"), PurchaseController.getPurchasedCourses);

export const purchaseRouter = router;
