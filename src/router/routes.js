import { lazy } from "react"
import ULayoutPlain from '@/components/ULayoutPlain/ULayoutPlain'

const routes = [
  {
    path: '/Login',
    layout: ULayoutPlain,
    component: lazy(() => import('@/pages/Login/Login'))
  },
  {
    path: '/Register',
    layout: ULayoutPlain,
    component: lazy(() => import('@/pages/Register/Register')),
  },
  {
    path: '/Home',
    component: lazy(() => import('@/pages/Home/Home'))
  },
  {
    path: '/My',
    component: lazy(() => import('@/pages/My/My')),
  },
  {
    path: '*',
    layout: null,
    component: lazy(() => import('@/pages/NotFound/NotFound'))
  }
]

export default routes
