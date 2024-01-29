import { createRouter, createWebHashHistory } from 'vue-router'

import DaybookRouter from '@/modules/daybook/router'
import AuthRouter from '@/modules/auth/router'
import isAuthenticatedGuard from '@/modules/auth/router/auth-guard'
const routes = [
 
  
  {
    path:'/',
    beforeEnter: [isAuthenticatedGuard],
    ...DaybookRouter
  },
  {
    path:'/auth',
    ...AuthRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
