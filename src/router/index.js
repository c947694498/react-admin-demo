import { Switch, Route } from "react-router-dom"

export const RenderRouter = ({ routes }) => {

  return (
    <Switch>
      {
        routes && routes.map(route => {
          return (
            <Route path={route.path} key={route.path} component={route.component}>
            </Route>
          )
        })
      }
    </Switch>
  )
}