import { validationRules } from "@/shared/validate";
import { z } from "zod";

export const schema = z.object({
  name: validationRules.required,
  email: validationRules.email,
  password: validationRules.required,
})

export type Form = z.infer<typeof schema> 