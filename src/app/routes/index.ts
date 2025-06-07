import { WelcomePage } from "@/pages/welcome"
import { createMemoryHistory, createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"
import { PublicLayout } from "../layout"
import { LoginPage } from "@/pages/login"
import { SignUpPage } from "@/pages/signup"
import { InternalServerError, NotFound } from "@/pages/error"
import { applyAuthLayout } from "./functions"
import { SignUpConfirmPage } from "@/pages/signup-confirm"

const authRoutes = applyAuthLayout([
  { path: '/login', name: 'login', component: LoginPage },
  {
    path: '/signup',
    children: [
      { path: '', name: 'signup', component: SignUpPage },
      { path: 'confirm', name: 'signup-confirm', component: SignUpConfirmPage }
    ]
  }
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
      { path: '404', name: 'not-found', component: NotFound },
      { path: '500', name: 'internal-server', component: InternalServerError },
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