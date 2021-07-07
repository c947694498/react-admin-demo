import { lazy } from 'react';
import { IRouteBases } from '../routes.type';

const routesBase: IRouteBases = [
  {
    path: '/',
    redirect: '/Home',
  },
  {
    path: '/Login',
    component: lazy(() => import('@src/pages/Login/Login'))
  },
  {
    path: '/Register',
    component: lazy(() => import('@src/pages/Register/Register'))
  },
]

export default routesBase