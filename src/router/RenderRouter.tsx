import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { Suspense } from "react";
import RouterLoading from "./RouterLoading";
import ULayout from "../components/ULayout/ULayout";

const RenderRouter = ({ routes }) => {
  const createComponent = (route, props) => {
    const RLayout = route.layout;
    const Component = route.component;
    let Layout:any = Fragment;

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

  const createRoute = (route) => {
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
