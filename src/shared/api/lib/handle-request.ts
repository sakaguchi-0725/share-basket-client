import type { ApiResponse } from "../model"
import { type ApiError } from "../model"

type Request<T> = () => Promise<ApiResponse<T>>

export const isApiError = (error: unknown): error is ApiError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    typeof (error as ApiError).code === 'string'
  )
}

export const handleRequest = async <T>(
  req: Request<T>,
  onSuccess: (data: T) => void,
  onFailure: (msg: string) => void
) => {
  const res = await req()

  if (res.status >= 200 && res.status < 300) {
    onSuccess(res.body)
  }

  if (isApiError(res.body)) {
    onFailure(res.body.message)
  }
}