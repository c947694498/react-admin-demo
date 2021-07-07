import { Route } from "react-router-dom";
import { IRoutes } from "../routes.type";

interface IProps {
  routes: IRoutes;
  layout: any
}

const RouterRenderBase = ({ routes, layout:Layout }: IProps) => {

  return routes.map((route) => {
    return (
      <Route
        exact 
        path={route.path}
        key={route.path}
        render={(props) => {
          return <Layout><route.component {...props}></route.component></Layout>
        }}
      ></Route>
    );
  })
};

export default RouterRenderBase;
