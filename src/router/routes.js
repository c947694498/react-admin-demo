import Home from "../pages/Home"
import My from "../pages/My"
import NotFound from '../pages/NotFound'

const routes = [
  {
    path: '/Home',
    component: Home,
  },
  {
    path: '/My/:id',
    component: My
  },
  {
    path: '*',
    component: NotFound
  }
]

export default routes