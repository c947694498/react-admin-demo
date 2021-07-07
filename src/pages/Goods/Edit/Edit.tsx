import useRouteHash from "@src/router/hooks/useRouteHash";
import useRouteQuery from "@src/router/hooks/useRouteQuery";
import { useParams } from "react-router-dom";

interface GoodsEditParams {
  id: string;
}
interface GoodsEditQuery {
  test: string;
}

const GoodsEdit = () => {
  const params = useParams<GoodsEditParams>();
  const query = useRouteQuery<GoodsEditQuery>();
  const hash = useRouteHash();
  return (
    <>
      商品编辑
      <div>params id: {params.id}</div>
      <div>query: {query.test}</div>
      <div>hash: {hash}</div>
    </>
  );
};

export default GoodsEdit;
