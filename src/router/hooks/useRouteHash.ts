import { useLocation } from 'react-router-dom';
const useRouteHash = () => {
  const location = useLocation()
  const hash = location.hash
  return hash
}
export default useRouteHash