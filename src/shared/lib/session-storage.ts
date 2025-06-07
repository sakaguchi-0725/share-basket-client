const SESSION_KEYS = {
  email: 'email',
} as const

type SessionKey = keyof typeof SESSION_KEYS

export const session = {
  getItem(key: SessionKey) {
    return sessionStorage.getItem(key) ?? ''
  },
  setItem(key: SessionKey, val: string) {
    sessionStorage.setItem(key, val)
  }
}
