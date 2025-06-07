import { useForm } from "vee-validate"
import { onMounted, ref } from "vue"
import { useRouter } from "vue-router"
import { schema, type Form } from "../model"
import { toTypedSchema } from "@vee-validate/zod"
import { handleRequest } from "@/shared/api"
import { signUpConfirm } from "../api"
import { convertToRequest } from "./functions"
import { session } from "@/shared/lib"

export const useInteraction = () => {
  const router = useRouter()
  const email = ref('')
  const errorMessage = ref<string>()

  onMounted(() => email.value = session.getItem('email'))

  const { defineField, errors, handleSubmit } = useForm<Form>({
    validationSchema: toTypedSchema(schema)
  })

  const onSubmit = handleSubmit(async (values) => {
    await handleRequest(
      () => signUpConfirm(convertToRequest(email.value, values)),
      () => router.push({ name: 'login' }),
      (msg: string) => errorMessage.value = msg
    )
  })

  return {
    email,
    defineField,
    errors,
    errorMessage,
    onSubmit,
  }
}