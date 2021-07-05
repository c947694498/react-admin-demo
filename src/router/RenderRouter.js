import { Switch, Route } from "react-router-dom";

const RenderRouter = ({ routes }) => {

  return (
    <Switch>
      {routes && routes.map(route => {
        return (
          <Route path={route.path} key={route.path} component={route.component}>
          </Route>
        );
      })}
    </Switch>
  );
};

export default RenderRouter