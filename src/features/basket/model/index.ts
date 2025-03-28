import type { CategoryKey } from "@/entities/basket"
import { Package, Shirt, UtensilsCrossed } from "lucide-vue-next"
import type { Component } from "vue"

export type BasketItemPresenter = {
  id: number
  name: string
  category: CategoryKey
  status: string
}

export const categoryIconMap: Record<CategoryKey, Component> = {
  foods: UtensilsCrossed,
  daily: Package,
  clothes: Shirt,
}