import Main from '@/pages/Main'
import ShopCorpets from '@/pages/ShopCorpets'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/shop-corpets',
    component: ShopCorpets
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_UURL)
})

export default router;