import { HomePage } from "@/pages/home"
import { MyBasketPage } from "@/pages/my-basket"
import { WelcomePage } from "@/pages/welcome"
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"
import { MainLayout } from "../layout"

const routes: RouteRecordRaw[] = [
  { path: '/', component: WelcomePage },
  {
    path: '/',
    meta: { layout: MainLayout },
    children: [
      {
        path: '/home',
        meta: { title: 'Home', type: 'default' },
        component: HomePage
      },
      {
        path: '/basket',
        meta: { title: 'Basket', type: 'default' },
        component: MyBasketPage
      },
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})