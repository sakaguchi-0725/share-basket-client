import type { RouteMeta } from "vue-router"

export interface CustomRouteMeta extends RouteMeta {
  title: string
  type: 'default' | 'backOnly'
}