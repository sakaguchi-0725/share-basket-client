import type { Status } from "@/entities/status"

export type PersonalItem = {
  id: number
  name: string
  status: Status
  categoryId: number
}