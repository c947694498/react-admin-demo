import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { Suspense } from "react";
import RouterLoading from "./RouterLoading";
import { IRoutes, IRoute } from "./routes.type";
import ULayout from "@src/components/ULayout/ULayout";

interface IProps {
  routes: IRoutes;
}

const RenderRouter = ({ routes }: IProps) => {
  const createComponent = (route: IRoute, props: any) => {
    const RLayout = route.layout;
    const Component = route.component;
    let Layout: any = Fragment;

    if (RLayout === undefined) {
      Layout = ULayout;
    } else if (RLayout) {
    Layout = RLayout;
    }
    return (
      <Layout>
        <Component {...props}></Component>
      </Layout>
    );
  };

  const createRoute = (route: IRoute) => {
    return (
      <Route
        exact
        path={route.path}
        key={route.path}
        render={(props) => createComponent(route, props)}
      ></Route>
    );
  };

  return (
    <Suspense fallback={RouterLoading()}>
      <Switch>{routes && routes.map((route) => createRoute(route))}</Switch>
    </Suspense>
  );
};

export default RenderRouter;
