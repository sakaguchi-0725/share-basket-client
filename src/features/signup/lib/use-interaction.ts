import { useForm } from "vee-validate"
import { schema, type Form } from "../model/schema"
import { toTypedSchema } from "@vee-validate/zod"

export const useInteraction = () => {
  const { defineField, errors } = useForm<Form>({
    validationSchema: toTypedSchema(schema)
  })

  return {
    defineField,
    errors
  }
}