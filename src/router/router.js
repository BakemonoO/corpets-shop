import Main from '@/pages/Main'
import ShopCorpets from '@/pages/ShopCorpets'
import CorpetItemPage from '@/pages/CorpetItemPage'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/shop-corpets',
    component: ShopCorpets
  },
  {
    path: '/shop-corpets/:id',
    component: CorpetItemPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;