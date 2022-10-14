import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import defaultCardsImg from 'front-end/images/icons/avatar-light-gray.svg'
const Account = ({
  uid,
  checkingStatus,
  userInfo
}) => {

  console.log('userInfo', userInfo)
  const imgCards = userInfo.imgsAccount ? userInfo.imgsAccount : defaultCardsImg;




  return (
    <>
      <TemplateAccount title="Учетная запись компании" >

        {checkingStatus ? 'Loading account...' : (
          <>
            <div className="cabinet-account shadow-container main-grid">
              <div className="col-2 col-lg-3 col-sm-5">
                <div className="cards-face-container">
                  <div
                    className="cards-face img-cover"
                    style={{ backgroundImage: `url(${imgCards})` }}
                  >
                  </div>
                </div>
              </div>
              <div className="col-10 col-lg-9 col-sm-12">
                <div className="account-container">
                  <div className="account-item"> <b>Имя</b>
                    <div>{userInfo.name ? userInfo.name : '-/-'}</div>
                  </div>
                  <div className="account-item"> <b>Email </b>
                    <div>{userInfo.email ? (<a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>) : '-/-'}</div>
                  </div>
                  <div className="account-item"> <b>Телефон</b>
                    <div>{userInfo.phones_main ? (<a href={`mailto:${userInfo.phones_main}`}>{userInfo.phones_main}</a>) : '-/-'}</div>
                  </div>
                  <div className="account-item"> <b>Пол</b>
                    <div> <div>{userInfo.gender ? userInfo.gender : '-/-'}</div></div>
                  </div>
                  <div className="account-item"> <b>Дата рождения</b>
                    <div> <div>{userInfo.dateBerth ? userInfo.gender : '-/-'}</div></div>
                  </div>
                  <div className="account-item"> <b>Видимость профиля</b>
                    <div> <div>{userInfo.profileStatisView ? userInfo.gender : '-/-'}</div></div>
                  </div>
                </div>
                <div className="btn-container">
                  <Link to='/cabinet/account-edit/' className="btn btn-edit btn--orange ico-in ico-in--left">
                    <i></i>
                    <span>Редактировать профиль</span>
                  </Link>
                  <div className="btn btn-delete-profiled btn--red ico-in ico-in--left">
                    <i></i><span>Удалить профиль</span>
                  </div>
                </div>
              </div>
            </div></>
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