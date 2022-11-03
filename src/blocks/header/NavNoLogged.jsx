import { Link, useLocation, } from 'react-router-dom';

const NavNoLogged = ({ showPopup }) => {
  const location = useLocation();



  const pathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <>
      <nav className="nav nav-nologged">
        <ul className='ln'>
          <li><Link className={(pathMathRoute('/authorization') ? 'active' : '')} to="/authorization">Войти</Link></li>
          <li><Link className={(pathMathRoute('/registration') ? 'active' : '')} to="/registration">Регистрация</Link></li>
          <li><div className="hamburger-btn element-btn" onClick={showPopup}></div></li>
        </ul>
      </nav>
    </>
  )
}

export default NavNoLogged