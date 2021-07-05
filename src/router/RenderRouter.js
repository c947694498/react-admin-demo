import { Switch, Route } from "react-router-dom";
import { Suspense } from 'react'
import RouterLoading from './RouterLoading'

const RenderRouter = ({ routes }) => {
  return (
    <Suspense fallback={RouterLoading()}>
      <Switch>
        {routes && routes.map(route => (
          <Route
            exact
            path={route.path}
            key={route.path}
            >
              <route.component></route.component>
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
};

export default RenderRouter