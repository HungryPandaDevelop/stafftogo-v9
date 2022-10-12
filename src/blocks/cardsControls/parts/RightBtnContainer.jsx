import { Link, useLocation } from "react-router-dom";




const LeftBtnContainer = () => {

  const location = useLocation();
  const pathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <>
      <Link className={`btn btn--white-border btn-search ${(pathMathRoute('/map') ? 'active' : '')}`} to="/map">Карта</Link>
      <Link className={`btn btn--orange-border ${(pathMathRoute('/catalog') ? 'active' : '')}`} to="/catalog">Список</Link>
    </>
  )
}

export default LeftBtnContainer
