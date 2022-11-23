import { connect } from 'react-redux';

import { Link, useLocation } from 'react-router-dom';

import { getAuth } from 'firebase/auth';


const CabinetSidebar = ({ userInfo }) => {

  const auth = getAuth();
  const onLogout = () => {
    auth.signOut();
  }

  const location = useLocation();

  const pathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  }

  const NameMassEmployers = [
    ['Профиль', '', 'profile-nav'],
    ['Вакансии', 'vacancies', 'cards-nav'],
    ['Избранное', 'liked', 'favorites-nav'],
    ['Спрятанное', 'hidden', 'hidden-nav'],
    ['Отклики', 'invitations', 'responses-nav'],
    ['Приглашения', 'responses', 'invitation-nav'],
    ['Чат', 'chat', 'chat-nav'],
    ['Видеочат', 'videochat', 'videochat-nav'],
    ['Подписка', 'subscription', 'subscription-nav'],
  ]

  const NameMassApplicants = [
    ['Профиль', '', 'profile-nav'],
    ['Резюме', 'resume', 'cards-nav'],
    ['Избранное', 'liked', 'favorites-nav'],
    ['Спрятанное', 'hidden', 'hidden-nav'],
    ['Отклики', 'invitations', 'responses-nav'],
    ['Приглашения', 'responses', 'invitation-nav'],
    ['Чат', 'chat', 'chat-nav'],
    ['Видеочат', 'videochat', 'videochat-nav']
  ]

  const adminMass = [
    ['Страницы', 'pages', ''],
    ['Специализация', 'specialization', ''],
    ['Сфера деятельнсти', 'activity', ''],
  ]

  return (
    <div className='cabinet-nav'>
      <ul className="ln ">
        {(userInfo.typeCabinet === 'resume' ? NameMassApplicants : NameMassEmployers)
          .map((item, index) => (
            <li key={index} >
              <Link className={`${item[2]} ${pathMathRoute('/cabinet/' + item[1]) ? 'active' : ''}`} to={`/cabinet/${item[1]}`}>
                <i></i>
                <span>{item[0]}</span>
              </Link>
            </li>
          )
          )}
        {userInfo.admin === 'true' && adminMass.map((item, index) => (
          <li key={index} >
            <Link className={`${item[2]} ${pathMathRoute('/cabinet/' + item[1]) ? 'active' : ''}`} to={`/cabinet/${item[1]}`}>
              <i></i>
              <span>{item[0]}</span>
            </Link>
          </li>
        )
        )}
        <li onClick={onLogout}>
          <em className='cabinet-logout'>
            <i></i>
            <span>Выйти</span>
          </em>
        </li>
      </ul>


    </div>
  )
}

const mapStateToProps = (state) => {
  return {

    userInfo: state.accountInfo.info,
  }
}

export default connect(mapStateToProps)(CabinetSidebar);