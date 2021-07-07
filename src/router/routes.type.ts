// 菜单路由配置
export interface IRouteMenu {
  path: string;
  title?: string;
  component?: any;
  hidden?: boolean;
  subMenu?: IRouteMenus;
}

export type IRouteMenus = IRouteMenu[];

// 路由配置
export type IRoute = {
  // 路径
  path: string;
  // 组件
  component: any;
};

export type IRoutes = IRoute[];
