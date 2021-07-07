import { IRouteBases } from './../routes.type';
import { lazy } from 'react'

const routesError: IRouteBases = [
  {
    path: '*',
    component: lazy(() => import('@src/pages/NotFound/NotFound'))
  }
]

export default routesError