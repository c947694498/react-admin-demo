import { Switch, Route } from "react-router-dom";
import { Suspense } from 'react'
import RouterLoading from './RouterLoading'

const RenderRouter = ({ routes }) => {
  const createRoute = route => {
    return (
      <Route
        exact
        path={route.path}
        key={route.path}
        render={props => <route.component {...props}></route.component>}
      >
      </Route>
    )
  }

  return (
    <Suspense fallback={RouterLoading()}>
      <Switch>
        {
          routes && routes.map(route => createRoute(route))
        }
      </Switch>
    </Suspense>
  );
};

export default RenderRouter