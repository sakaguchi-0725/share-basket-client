import { useForm } from "vee-validate"
import { schema, type Form } from "../model"
import { toTypedSchema } from "@vee-validate/zod"
import { handleRequest } from "@/shared/api"
import { login } from "../api"
import { convertToRequest } from "./functions"
import { useRouter } from "vue-router"
import { ref } from "vue"

export const useInteraction = () => {
  const router = useRouter()
  const errorMessage = ref<string>()
  const { defineField, errors, handleSubmit } = useForm<Form>({
    validationSchema: toTypedSchema(schema)
  })

  const onSubmit = handleSubmit(async (values) => {
    await handleRequest(
      () => login(convertToRequest(values)),
      () => router.push({ name: 'welcome' }), // TODO: 買い物一覧ページに遷移させる
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