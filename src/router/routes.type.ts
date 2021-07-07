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
export type IRouteBase = {
  // 路径
  path: string;
  // 组件
  component?: any;
  // 重定向
  redirect?: string;
  // 精确匹配
  exact?: boolean;
  // 严格匹配
  strict?: boolean;
};

export type IRouteBases = IRouteBase[];
