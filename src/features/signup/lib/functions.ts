import type { Form, SignUpRequest } from "../model"

export const convertToRequest = (form: Form): SignUpRequest => {
  return {
    name: form.name,
    email: form.email,
    password: form.password
  }
}