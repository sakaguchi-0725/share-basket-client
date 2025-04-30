import { z } from "zod"

export const messages = {
  required: '必須項目です',
  min(len: number) {
    return `${len}文字以上で入力して下さい`
  },
  max(len: number) {
    return `${len}文字以内で入力して下さい`
  }
} as const

export const validationRules = {
  email: z.string({ required_error: messages.required })
    .email({ message: 'メールアドレス形式で入力して下さい' }),
  required: z.string({ required_error: messages.required })
    .min(1, { message: messages.required })
}