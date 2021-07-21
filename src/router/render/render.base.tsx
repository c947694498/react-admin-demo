import { Redirect, Route } from "react-router-dom";
import { IRouteBases } from "../routes.type";

interface IProps {
  // 路由合集
  routes: IRouteBases;
  // 布局组件
  layout: any;
}

const RouterRenderBase = ({ routes, layout: Layout }: IProps) => {
  return routes.map((route) => {
    if (route.redirect) {
      return (
        <Redirect
          exact
          from={route.path}
          to={route.redirect}
          key={route.path}
        ></Redirect>
      );
    }
    return (
      <Route
        exact
        path={route.path}
        key={route.path}
        render={(props) => {
          return Layout ? (
            <Layout>
              <route.component {...props}></route.component>
            </Layout>
          ) : (
            <route.component {...props}></route.component>
          );
        }}
      ></Route>
    );
  });
};

export default RouterRenderBase;
