import { useLocation } from "react-router-dom";
import qs from "qs";

// 获取路由query
const useRouteQuery = <
  Query extends { [K in keyof Query]?: string } = {}
>(): Query => {
  let location = useLocation();
  let queryStr = location.search.replace(/^\?/, "");
  let query = qs.parse(queryStr);
  return query as Query;
};

export default useRouteQuery;
