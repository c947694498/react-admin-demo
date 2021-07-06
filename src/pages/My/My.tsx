import { useParams } from "react-router-dom";

interface IParams {
  id: string;
}

const My = () => {
  const params = useParams<IParams>();
  return <>My{params.id}</>;
};
export default My;
