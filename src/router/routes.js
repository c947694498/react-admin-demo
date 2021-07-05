import Home from "../pages/Home"
import My from "../pages/My"
import NotFound from '../pages/NotFound'

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/My/:id',
    name: 'My',
    component: My
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

export default routes