// 菜单路由配置
export interface IRouteMenu {
  // 路径
  path: string;
  // 标题
  title?: string;
  // 组件
  component?: any;
  // 隐藏
  hidden?: boolean;
  // 子菜单
  subMenu?: IRouteMenus;
}

export type IRouteMenus = IRouteMenu[];

// 路由配置
export type IRouteBase = {
  // 路径
  path: string;
  // 组件
  component?: any;
  // 重定向
  redirect?: string;
};

export type IRouteBases = IRouteBase[];
