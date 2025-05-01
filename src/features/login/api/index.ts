import { apiPost } from "@/shared/api";
import type { LoginRequest } from "../model";

export const login = async (req: LoginRequest) => {
  return apiPost<void>('/personal/login', req)
}