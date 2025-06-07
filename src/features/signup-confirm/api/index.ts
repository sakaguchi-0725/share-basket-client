import { apiPost } from "@/shared/api"
import type { SignUpConfirmRequest } from "../model"

export const signUpConfirm = (req: SignUpConfirmRequest) => {
  return apiPost<void>('/signup/confirm', req)
}