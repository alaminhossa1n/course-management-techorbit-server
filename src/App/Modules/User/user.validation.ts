import { z } from "zod";

export const ZodUserValidation = z.object({
  name: z.string().min(1),
  email: z.email(),
  password: z.string().min(8),
  role: z.enum(["admin", "user"]),
});

export const ZodUserSignInValidation = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type TUser = z.infer<typeof ZodUserValidation>;
export type TUserSignIn = z.infer<typeof ZodUserSignInValidation>;
