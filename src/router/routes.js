import { lazy } from "react"

const routes = [
  {
    path: '/Login',
    component: lazy(() => import('../pages/Login/Login'))
  },
  {
    path: '/Register',
    component: lazy(() => import('../pages/Register/Register')),
  },
  {
    path: '/Home',
    component: lazy(() => import('../pages/Home/Home'))
  },
  {
    path: '/My',
    component: lazy(() => import('../pages/My/My')),
  },
  {
    path: '*',
    component: lazy(() => import('../pages/NotFound/NotFound'))
  }
]

export default routes