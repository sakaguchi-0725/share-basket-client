import type { ApiResponse } from "../model"
import { ERROR_CODES, ERROR_MESSAGES, type ApiError, type ErrorCode } from "../model"

type Request<T> = () => Promise<ApiResponse<T>>

export const isApiError = (error: unknown): error is ApiError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    typeof (error as ApiError).code === 'string'
  )
}

export const isKnownErrorCode = (code: string): code is ErrorCode => {
  return Object.values(ERROR_CODES).includes(code as ErrorCode)
}

const generateMessage = (error: ApiError) => {
  if (isKnownErrorCode(error.code)) {
    return ERROR_MESSAGES[error.code as keyof typeof ERROR_MESSAGES]
  }
  return '予期せぬエラーが発生しました。'
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
    onFailure(generateMessage(res.body))
  }
}