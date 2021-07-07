import { IRouteMenus } from '../routes.type';
import { lazy } from "react"

const menus: IRouteMenus = [
  {
    path: '/Home',
    title: '首页',
    component: lazy(() => import('@src/pages/Home/Home')),
  },
  {
    path: '/My',
    title: '我的',
    component: lazy(() => import('@src/pages/My/My')),
  },
  {
    path: '/Goods',
    title: '商品管理',
    subMenu: [
      {
        path: '/Goods',
        title: '商品管理',
        component: lazy(() => import('@src/pages/Goods/Goods'))
      },
      {
        path: '/Goods/New',
        title: '添加商品',
        component: lazy(() => import('@src/pages/Goods/New/New'))
      },
      {
        path: '/Goods/Edit/:id',
        title: '编辑商品',
        component: lazy(() => import('@src/pages/Goods/Edit/Edit'))
      }
    ]
  }
]

export default menus
