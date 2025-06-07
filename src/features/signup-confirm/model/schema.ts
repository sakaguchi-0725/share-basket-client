import { validationRules } from "@/shared/validate"
import { z } from "zod"

export const schema = z.object({
  confirmationCode: validationRules.required,
})

export type Form = z.infer<typeof schema>