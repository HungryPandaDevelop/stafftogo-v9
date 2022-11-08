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
      <Link className={`btn btn--white-border btn-search ${(pathMathRoute('/catalog/' + getCategoryName + '/map') ? 'active' : '')}`} to={`/catalog/${getCategoryName}/map`}>Карта</Link>
      <Link className={`btn btn--orange-border ${(pathMathRoute('/catalog/' + getCategoryName) ? 'active' : '')}`} to={`/catalog/${getCategoryName}`}>Список</Link>
    </>
  )
}

export default LeftBtnContainer
