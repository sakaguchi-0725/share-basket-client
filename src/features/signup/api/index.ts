import { apiPost } from "@/shared/api"
import type { SignUpRequest } from "../model"

export const signUp = (req: SignUpRequest) => {
  return apiPost<void>('/personal/signup', req)
}