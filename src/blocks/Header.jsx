import { useState } from 'react';

import CheckLogged from 'blocks/header/CheckLogged';
import Logo from 'blocks/header/Logo';
import City from 'blocks/header/City';
import Search from 'blocks/header/Search';
import AuthInfo from 'blocks/header/AuthInfo';

import MenuPopup from 'components/popup/MenuPopup';



const Header = () => {

  const [showNavMenu, setShowNavMenu] = useState(false);

  const showPopup = () => {
    setShowNavMenu(true);
  }
  const closePopup = () => {
    setShowNavMenu(false);
  }

  return (
    <>
      <MenuPopup showNavMenu={showNavMenu} closePopup={closePopup} />
      <AuthInfo />
      <header >
        <div className="main-grid">
          <Logo />
          <City />
          <Search />
          <CheckLogged showPopup={showPopup} />
        </div>
      </header>
    </>
  )
}

export default Header
