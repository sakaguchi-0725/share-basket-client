export type ButtonSize = 'full' | 'sm' | 'md' | 'lg'
export type ButtonVariant = 'primary' | 'secondary' | 'outline'

export const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'py-1 px-3',
  md: 'py-2 px-4',
  lg: 'py-3 px-6',
  full: 'w-full py-2 px-4'
}

export const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-orange-500 text-white font-bold active:bg-orange-600',
  secondary: 'bg-gray-200 text-gray-800 font-bold active:bg-gray-300',
  outline: 'bg-transparent text-gray-700 text-outline border border-orange-500'
}

export const DISABLED_CLASS = 'opacity-50 cursor-not-allowed'
export const ENABLED_CLASS = 'cursor-pointer' 