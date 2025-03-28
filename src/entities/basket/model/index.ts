export const categoryMap = {
  foods: { label: '食品' },
  daily: { label: '日用品' },
  clothes: { label: '衣類' },
} as const

export type CategoryKey = keyof typeof categoryMap