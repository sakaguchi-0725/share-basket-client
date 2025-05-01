export type ApiResponse<T> = {
  body: T
  status: number
}

export const ERROR_CODES = {
  Unauthorized: 'Unauthorized',
  Forbidden: 'Forbidden',
  NotFound: 'NotFound',
  ValidationError: 'ValidationError',
  InternalServerError: 'InternalServerError',
} as const

export type ErrorCode = typeof ERROR_CODES[keyof typeof ERROR_CODES]

export const ERROR_MESSAGES = {
  [ERROR_CODES.Unauthorized]: '認証に失敗しました。再度ログインしてください。',
  [ERROR_CODES.Forbidden]: 'この操作を行う権限がありません。',
  [ERROR_CODES.NotFound]: 'リソースが見つかりませんでした。',
  [ERROR_CODES.ValidationError]: '入力内容に誤りがあります。',
  [ERROR_CODES.InternalServerError]: 'サーバーでエラーが発生しました。',
} as const

export type ApiError = {
  code: string
}
