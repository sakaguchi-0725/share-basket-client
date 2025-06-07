export type ApiResponse<T> = {
  body: T
  status: number
}

export type ApiError = {
  code: string
  message: string
}
