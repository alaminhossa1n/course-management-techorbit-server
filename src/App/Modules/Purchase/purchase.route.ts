import { Router } from "express";
import { PurchaseController } from "./purchase.controller";
import auth from "../../Middleware/auth";

const router = Router();

router.post("/", auth("user", "admin"), PurchaseController.purchaseCourse);

export const purchaseRouter = router;
