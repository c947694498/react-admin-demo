import { lazy } from "react"

const routes = [

  {
    path: '/Home',
    component: lazy(() => import('../pages/Home'))
  },
  {
    path: '/My',
    component: lazy(() => import('../pages/My')),
    children: [
      {
        path: '/ChildA',
        component: lazy(() => import('../pages/ChildA'))
      }
    ]
  },
  {
    path: '*',
    component: lazy(() => import('../pages/NotFound'))
  }
]

export default routes