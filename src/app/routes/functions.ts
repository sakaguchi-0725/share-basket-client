import { type RouteRecordRaw } from 'vue-router'
import { AuthLayout } from '../layout'

export const applyAuthLayout = (routes: RouteRecordRaw[]): RouteRecordRaw[] => {
  return routes.map(route => ({
    ...route,
    meta: {
      ...route.meta,
      layout: AuthLayout
    }
  }))
}
