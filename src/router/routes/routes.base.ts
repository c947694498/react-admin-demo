import { lazy } from 'react';

const routesBase = [
  {
    path: '/Login',
    name: 'Login',
    component: lazy(() => import('@src/pages/Login/Login'))
  },
  {
    path: '/Register',
    name: 'Register',
    component: lazy(() => import('@src/pages/Register/Register'))
  },
]

export default routesBase