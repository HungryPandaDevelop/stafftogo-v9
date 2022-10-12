import logo from 'front-end/images/logo.svg';
// import vk from 'front-end/images/social/vk.svg';
// import inst from 'front-end/images/social/instagram.svg';
// import tw from 'front-end/images/social/twitter.svg';

import { Link } from 'react-router-dom';

const MenuPopup = ({ showNavMenu, closePopup }) => {


  return (
    <>
      <div className={`popup element-show menu-hamburger ${showNavMenu && 'show'}`} >
        <div className="popup-overlay"></div>
        <div className="popup-container">
          <div className="close-btn close-btn_popup" onClick={closePopup}></div>
          <nav className="popup-nav">
            <ul className='ln'>
              <li> <Link to="/">Главная</Link></li>
              <li> <Link to="/catalog">Вакансии / Резюме</Link></li>
              <li> <Link to="#">О нас</Link></li>
              <li> <Link to="#">Контакты</Link></li>
              <li> <Link to="/chatlist">Чат</Link></li>
            </ul>
          </nav>
          <div className="popup-feedback">
            <div className="container">
              <div className="feedback-phone"><a href="tel:+88005559810">+7 (921) 789 - 65 - 31</a></div>
              <div className="feedback-social">
                <div className="social">
                  {/* <a href="#">
                    <img src={vk} alt="" />
                  </a>
                  <a href="#">
                    <img src={inst} alt="" />
                  </a>
                  <a href="#">
                    <img src={tw} alt="" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="popup-bottom">
            <div className="logo-container">
              <a className="logo" href="/">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="copyright">
              Мы - команда профессиональных рекрутеров, исследующих и развивающих отраслевоай поиск в области подбора работы и персонала. Мы преобразовываем обрасль путем применения инновационных решений.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuPopup
