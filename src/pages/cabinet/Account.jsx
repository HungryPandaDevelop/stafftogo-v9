import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import defaultCardsImg from 'front-end/images/icons/avatar-light-gray.svg'
const Account = ({
  uid,
  checkingStatus,
  userInfo
}) => {

  // console.log('userInfo', userInfo)



  const renderImgCards = () => {
    const imgCards = userInfo.imgsAccount ? userInfo.imgsAccount : defaultCardsImg;

    return (
      <div className="cards-face-container">
        <b>Фото профиля</b>
        <div
          className={`img-cover ${userInfo.imgsAccount ? 'cards-face' : 'empty-face'} `}
          style={{ backgroundImage: `url(${imgCards})` }}
        >
        </div>
      </div>
    )
  }

  const genderTextRender = () => {
    if (userInfo.gender === 'men') { return 'Мужской' }
    else if (userInfo.gender === 'women') { return 'Женский' }
    else { return '-/-' }
  }

  const statusSiteTextRender = () => {
    if (userInfo.statusInSite === 'on') { return 'Я ищу работу' }
    else if (userInfo.statusInSite === 'off') { return 'Я не ищу работу' }
    else { return '-/-' }
  }

  const formatPhone = (value) => {
    return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, value.length)}`
  }


  return (
    <>
      <TemplateAccount title="Учетная запись компании" >

        {checkingStatus ? 'Loading account...' : (
          <div className='main-grid'>
            <div className="col-12"><h3>Основная информация</h3></div>
            <div className="col-2 col-lg-3 col-sm-5">
              {renderImgCards()}
            </div>
            <div className="col-10 col-lg-9 col-sm-12">
              <div className="main-grid">
                <div className="account-item col-6"> <b>Фио</b>
                  <div>{userInfo.fio ? userInfo.fio : '-/-'}</div>
                </div>
                <div className="account-item col-6"> <b>Email </b>
                  <div>{userInfo.email ? (<a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>) : '-/-'}</div>
                </div>
                <div className="account-item col-6"> <b>Телефон</b>
                  <div>{userInfo.phone ? (<a href={`mailto:+7${userInfo.phone}`}>+7{formatPhone(userInfo.phone)}</a>) : '-/-'}</div>
                </div>
                <div className="account-item col-6"> <b>Пол</b>
                  <div> {genderTextRender()}</div>
                </div>
                <div className="account-item col-6"> <b>Дата рождения</b>
                  <div> {userInfo.age ? userInfo.age : '-/-'}</div>
                </div>
                <div className="account-item col-6"> <b>Видимость профиля</b>
                  <div> {statusSiteTextRender()}</div>
                </div>
                <div className="col-12 btn-container">
                  <Link to='/cabinet/account-edit/' className="btn btn-edit btn--orange ico-in ico-in--left">
                    <i></i>
                    <span>Редактировать профиль</span>
                  </Link>
                  <div className="btn btn-delete-profiled btn--red ico-in ico-in--left">
                    <i></i><span>Удалить профиль</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}


      </TemplateAccount>
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    userInfo: state.accountInfo.info,
    checkingStatus: state.accountInfo.checkingStatus
  }
}

export default connect(mapStateToProps)(Account);