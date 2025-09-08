import { z } from "zod";

export const ZodCourseValidation = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  price: z.number(),
  instructor: z.string().min(1),
});

export type TCourse = z.infer<typeof ZodCourseValidation>;
