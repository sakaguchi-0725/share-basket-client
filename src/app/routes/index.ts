import { WelcomePage } from "@/pages/welcome"
import { createMemoryHistory, createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"
import { PublicLayout } from "../layout"
import { LoginPage } from "@/pages/login"
import { SignUpPage } from "@/pages/signup"
import { InternalServerError, NotFound } from "@/pages/error"
import { applyAuthLayout } from "./functions"

const authRoutes = applyAuthLayout([
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/signup', name: 'signup', component: SignUpPage },
])

const routes: RouteRecordRaw[] = [
  ...authRoutes,
  {
    path: '/',
    name: 'welcome',
    meta: { layout: PublicLayout },
    component: WelcomePage
  },
  {
    path: '/error',
    children: [
      { path: '404', component: NotFound },
      { path: '500', component: InternalServerError },
    ]
  }
]

export const createAppRouter = (type: 'web' | 'memory') => {
  const history =
    type === 'web'
      ? createWebHistory(import.meta.env.BASE_URL)
      : createMemoryHistory(import.meta.env.BASE_URL)

  return createRouter({ history, routes })
}