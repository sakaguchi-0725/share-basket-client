export * from './schema'

export type SignUpConfirmRequest = {
  email: string
  confirmationCode: string
}