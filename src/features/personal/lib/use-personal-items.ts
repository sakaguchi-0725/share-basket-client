import { onMounted, ref } from "vue"
import type { PersonalItem } from "../model"
import { handleRequest } from "@/shared/api"
import { getAllPersonalItems } from "../api"
import { STATUSES } from "@/entities/status"
import { useRouter } from "vue-router"

export const usePersonalItems = () => {
  const router = useRouter()
  const items = ref<PersonalItem[]>()

  onMounted(async () => {
    await handleRequest(
      () => getAllPersonalItems(STATUSES.UnPurchased),
      (data) => items.value = data,
      (msg) => {
        alert(msg)
        router.push({ name: 'internal-server' })
      }
    )
  })

  return {
    items,
  }
}