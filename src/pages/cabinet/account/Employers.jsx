import { Link } from 'react-router-dom';

const Employers = ({ renderImgCards, userInfo, formatPhone }) => {



  return (
    <div className='main-grid'>
      <div className="col-12"><h3>Основная информация</h3></div>
      <div className="col-2 col-lg-3 col-sm-5">
        {renderImgCards()}
      </div>
      <div className="col-10 col-lg-9 col-sm-12">
        <div className="main-grid">
          <div className="account-item col-6"> <b>Фио</b>
            <div>{userInfo.accountName ? userInfo.accountName : '-/-'}</div>
          </div>
          <div className="account-item col-6"> <b>Email </b>
            <div>{userInfo.email ? (<a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>) : '-/-'}</div>
          </div>
          <div className="account-item col-6"> <b>Телефон</b>
            <div>{userInfo.phone ? (<a href={`mailto:+7${userInfo.phone}`}>+7{formatPhone(userInfo.phone)}</a>) : '-/-'}</div>
          </div>

          <div className="account-item col-6"> <b>Дата рождения</b>
            <div> {userInfo.age ? userInfo.age : '-/-'}</div>
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
  )
}

export default Employers