import { Link, useLocation, useParams } from "react-router-dom";




const LeftBtnContainer = () => {
  const params = useParams();
  const location = useLocation();

  const pathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  }

  const getCategoryName = params.catagoryName ? params.catagoryName : 'vacancies';

  return (
    <>
      <Link className={`btn btn-map-filters ${(pathMathRoute('/catalog/' + getCategoryName + '/map') ? 'active' : '')}`} to={`/catalog/${getCategoryName}/map`}>&nbsp;</Link>
      <Link className={`btn btn--orange-border ${(pathMathRoute('/catalog/' + getCategoryName) ? 'active' : '')}`} to={`/catalog/${getCategoryName}`}>Список</Link>
    </>
  )
}

export default LeftBtnContainer
