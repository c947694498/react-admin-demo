import { Suspense } from "react";
import { HashRouter, Switch } from "react-router-dom";
import RouterLoading from "@src/router/components/RouterLoading";
import RouterRenderMenus from "@src/router/render/render.menus";
import RouterRenderBase from "@src/router/render/render.base";
import routesMenus from "@src/router/routes/routes.menus";
import routesBase from "@src/router/routes/routes.base";
import routesError from "@src/router/routes/routes.error";
import ULayoutBase from "@src/components/ULayoutBase/ULayoutBase";
import "./App.less";
import ULayout from "./components/ULayout/ULayout";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Suspense fallback={RouterLoading()}>
          <Switch>
            {/* 基础路由 */}
            {RouterRenderBase({ routes: routesBase, layout: ULayoutBase })}
            {/* 菜单路由 */}
            {RouterRenderMenus({ routes: routesMenus, layout: ULayout })}
            {/* 兜底报错路由 */}
            {RouterRenderBase({ routes: routesError, layout: ULayoutBase })}
          </Switch>
        </Suspense>
      </HashRouter>
    </div>
  );
};

export default App;
