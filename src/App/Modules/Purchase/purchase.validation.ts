import { z } from "zod";

const ZodPurchaseValidation = z.object({
  courseId: z.string().min(1, "Course ID is required"),
  amount: z.number().min(0, "Amount must be a positive number"),
});

type TPurchase = z.infer<typeof ZodPurchaseValidation>;

export { ZodPurchaseValidation, TPurchase };
