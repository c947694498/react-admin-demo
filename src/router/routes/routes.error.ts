import { lazy } from 'react'

const routesError = [
  {
    path: '*',
    component: lazy(() => import('@src/pages/NotFound/NotFound'))
  }
]

export default routesError