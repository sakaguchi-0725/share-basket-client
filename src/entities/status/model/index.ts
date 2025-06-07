export const STATUSES = {
  UnPurchased: 'UnPurchased',
  InTheCart: 'InTheCart',
  Purchased: 'Purchased',
} as const

export type Status = keyof typeof STATUSES

export const StatusJapanese = {
  UnPurchased: '未購入',
  InTheCart: 'カート内',
  Purchased: '購入済み',
} as const