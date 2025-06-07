import type { Form, SignUpConfirmRequest } from "../model"

export const convertToRequest = (email: string, form: Form): SignUpConfirmRequest => {
  return {
    email: email,
    confirmationCode: form.confirmationCode
  }
}