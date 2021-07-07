import { Route } from "react-router-dom";
import { IRouteMenu, IRouteMenus } from "../routes.type";

interface IProps {
  routes: IRouteMenus;
  layout: any
}

const RouterRenderMenus = ({ routes: menus, layout: Layout }: IProps) => {
  const makeMenu = (menu: IRouteMenu) => {
    return (
      <Route
        exact
        path={menu.path}
        key={menu.path}
        render={(props) => {
          return (
            <Layout>
              <menu.component {...props}></menu.component>
            </Layout> 
          )
        }}
      ></Route>
    );
  };

  const makeSubMenu = (subMenu: IRouteMenus) => {
    return subMenu.map((menu) => makeMenu(menu));
  };

  return menus.map((menu) => {
    if (menu.component) {
      return makeMenu(menu);
    } else {
      return menu.subMenu ? makeSubMenu(menu.subMenu) : makeMenu(menu);
    }
  });
};

export default RouterRenderMenus;
