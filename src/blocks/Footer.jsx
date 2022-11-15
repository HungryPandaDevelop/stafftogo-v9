import imgLogo from 'front-end/images/logo.svg'
import vkw from 'front-end/images/social/vk-white.svg'
import vkor from 'front-end/images/social/vk-orange.svg'
import tlw from 'front-end/images/social/telegram-white.svg'
import tlor from 'front-end/images/social/telegram-orange.svg'
import wzw from 'front-end/images/social/whatsapp-white.svg'
import wzor from 'front-end/images/social/whatsapp-orange.svg'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      {/* <div className="stub-footer"></div> */}
      <footer>
        <div className="main-grid">
          <div className="footer-info col-3 col-md-12">
            <div className="logo-container"><a className="logo" href="/">
              <img src={imgLogo} />
            </a></div>
            <div className="copyright">
              Мы - команда профессиональных рекрутеров, исследующих и развивающих отраслевоай поиск в области подбора работы и персонала. Мы преобразовываем обрасль путем применения инновационных решений.</div>
          </div>
          <nav className="nav-1 col-2 col-md-4 col-xs-12">
            <h3>Услуги</h3>
            <ul>
              <li> <a href="/catalog/resume"> Подбор персонала</a></li>
              <li> <a href="/catalog/vacancies"> Поиск работы</a></li>
              {/* <li> <a href="#"> Помощь рекрутера</a></li> */}
            </ul>
          </nav>
          <nav className="nav-3 col-2 col-md-4 col-xs-12">
            <h3>Возможности</h3>
            <ul>
              <li> <a href="/employers">Работодателям</a></li>
              <li> <a href="/applicants">Соискателям</a></li>
              <li> <a href="/advertisers">Рекламодателям</a></li>
            </ul>
          </nav>
          <nav className="nav-3 col-2 col-md-4 col-xs-12">
            <h3>Портал</h3>
            <ul>
              <li> <a href="/about"> О нас</a></li>
              <li> <a href="/contacts"> Контакты</a></li>
            </ul>
          </nav>
          <div className="col-3 footer-contacts col-md-6 col-xs-12">
            <p>Мы будем признательны за вашу помощь по улучшению функционала портала. Ждем ваших предложений: </p>
            <p> <Link to="/">general@staff2go.com </Link></p>
          </div>
          <div className="col-3 col-md-6 col-xs-12">
            <div className="links">
              <div><Link to="/">Пользовательское соглашение</Link></div>
              <div><Link to="/">Политика конфиденциальности</Link></div>
            </div>
          </div>
          <div className="social-container col-5 col-md-6 col-xs-12">
            <div className="social">
              <Link className="social-ico--white" to="/">
                <img src={vkw} alt="" />
                <img className='ico-hover' src={vkor} alt="" />
              </Link>
              <Link className="social-ico--white" to="/">
                <img src={tlw} alt="" />
                <img className='ico-hover' src={tlor} alt="" />
              </Link>
              <Link className="social-ico--white" to="/">
                <img src={wzw} alt="" />
                <img className='ico-hover' src={wzor} alt="" />
              </Link>

            </div>
          </div>
          <div className="col-4 col-md-6 col-xs-12">
            <div className="create">
              <Link to="/">
                Создание сайта Style You</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer