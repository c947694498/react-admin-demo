import { IRoutes } from './routes.type';
import { lazy } from "react"
import ULayoutPlain from '@src/components/ULayoutPlain/ULayoutPlain'

const routes: IRoutes = [
  {
    path: '/Login',
    layout: ULayoutPlain,
    component: lazy(() => import('@src/pages/Login/Login'))
  },
  {
    path: '/Register',
    layout: ULayoutPlain,
    component: lazy(() => import('@src/pages/Register/Register')),
  },
  {
    path: '/Home',
    component: lazy(() => import('@src/pages/Home/Home'))
  },
  {
    path: '/My',
    component: lazy(() => import('@src/pages/My/My')),
  },
  {
    path: '*',
    layout: null,
    component: lazy(() => import('@src/pages/NotFound/NotFound'))
  }
]

export default routes
