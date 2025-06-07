import type { Form } from "../model"

export const convertToRequest = (form: Form) => {
  return {
    email: form.email,
    password: form.password
  }
}