// 路由配置
export type IRoute = {
  // 路径
  path: string
  // 布局
  layout?: ((props: any) => JSX.Element) | null,
  // 组件
  component: any
};

export type IRoutes = IRoute[];
