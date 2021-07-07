import { Redirect, Route } from "react-router-dom";
import { IRouteBases } from "../routes.type";

interface IProps {
  routes: IRouteBases;
  layout: any;
}

const RouterRenderBase = ({ routes, layout: Layout }: IProps) => {
  return routes.map((route) => {
    if (route.redirect) {
      return (
        <Redirect
          exact
          path={route.path}
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
          return (
            <Layout>
              <route.component {...props}></route.component>
            </Layout>
          );
        }}
      ></Route>
    );
  });
};

export default RouterRenderBase;
