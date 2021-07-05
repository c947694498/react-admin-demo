import Home from "../views/Home"
import My from "../views/My"

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/My',
    name: 'My',
    component: My
  }
]

export default routes