import { useState, useEffect } from 'react';

import CheckLogged from 'blocks/header/CheckLogged';
import Logo from 'blocks/header/Logo';
import City from 'blocks/header/City';
import Search from 'blocks/header/Search';
import AuthInfo from 'blocks/header/AuthInfo';

import MenuPopup from 'components/popup/MenuPopup';
import CallPopup from 'components/popup/CallPopup';


import { useLocation } from 'react-router-dom';

const Header = () => {


  useEffect(() => {
    const hideByBody = (e) => {
      if (e.target.className !== 'hamburger-btn element-btn') {
        setShowNavMenu(false)
      }
      if (e.key === 'Escape') { setShowNavMenu(false); }
    }
    document.addEventListener('keydown', hideByBody);
    document.body.addEventListener('click', hideByBody);
    return () => {
      document.body.removeEventListener('click', hideByBody)
      document.body.removeEventListener('keydown', hideByBody)
    };
  }, []);



  const location = useLocation();

  const listingType = location.pathname.indexOf('resume') > 0 ? 'resume' : 'vacancies';
  const listingTypeReverse = location.pathname.indexOf('resume') > 0 ? 'vacancies' : 'resume';
  const listingPage = location.pathname.indexOf('map') > 0 ? true : false;

  const [showNavMenu, setShowNavMenu] = useState(false);

  const showPopup = () => {
    setShowNavMenu(true);
  }
  const closePopup = () => {
    setShowNavMenu(false);
  }

  return (
    <>

      <MenuPopup
        showNavMenu={showNavMenu}
        closePopup={closePopup}
        listingType={listingType}
        listingTypeReverse={listingTypeReverse}
        listingPage={listingPage}
      />
      <CallPopup />
      <AuthInfo />
      <header >
        <div className="main-grid">
          <Logo />
          <City />
          <Search listingType={listingType} listingTypeReverse={listingTypeReverse} listingPage={listingPage} />
          <CheckLogged showPopup={showPopup} />
        </div>
      </header>
    </>
  )
}

export default Header
