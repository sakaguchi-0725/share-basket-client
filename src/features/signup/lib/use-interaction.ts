import { useForm } from "vee-validate"
import { schema, type Form } from "../model"
import { toTypedSchema } from "@vee-validate/zod"
import { useRouter } from "vue-router"
import { ref } from "vue"
import { handleRequest } from "@/shared/api"
import { signUp } from "../api"
import { convertToRequest } from "./functions"
import { session } from "@/shared/lib"

export const useInteraction = () => {
  const router = useRouter()
  const errorMessage = ref<string>()

  const { defineField, errors, handleSubmit } = useForm<Form>({
    validationSchema: toTypedSchema(schema)
  })

  const onSubmit = handleSubmit(async (values) => {
    await handleRequest(
      () => signUp(convertToRequest(values)),
      () => {
        session.setItem('email', values.email)
        router.push({ name: 'signup-confirm' })
      },
      (msg: string) => errorMessage.value = msg
    )
  })

  return {
    defineField,
    errors,
    errorMessage,
    onSubmit
  }
}