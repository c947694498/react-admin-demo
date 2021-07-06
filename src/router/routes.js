import { lazy } from "react"

const routes = [

  {
    path: '/Home',
    component: lazy(() => import('../pages/Home'))
  },
  {
    path: '/My',
    component: lazy(() => import('../pages/My')),
  },
  {
    path: '*',
    component: lazy(() => import('../pages/NotFound'))
  }
]

export default routes