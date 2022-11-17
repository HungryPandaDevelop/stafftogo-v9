import { Link } from 'react-router-dom';

const Employers = ({ renderImgCards, userInfo, formatPhone, fields }) => {
  // userInfo.typeJob , fields.typeJob.options
  const bildTypeList = (getBase, getUser) => {
    let arrayTypeList = [];
    getBase.forEach(el => {
      getUser.forEach(item => {
        if (item.value === el) {
          arrayTypeList.push(item.label);
        }
      })
    });
    return arrayTypeList;
  }


  return (
    <div className='main-grid'>
      <div className="col-12"><h3>Основная информация</h3></div>
      <div className="col-2 col-lg-3 col-sm-5">
        {renderImgCards()}
      </div>
      <div className="col-10 col-lg-9 col-sm-12">
        <div className="main-grid">
          <div className="account-item col-6"> <b>Название компании</b>
            <div>{userInfo.accountName ? userInfo.accountName : '-/-'}</div>
          </div>
          <div className="account-item col-6"> <b>Email </b>
            <div>{userInfo.email ? (<a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>) : '-/-'}</div>
          </div>
          <div className="account-item col-6"> <b>Сайт компании </b>
            <div>{userInfo.email ? (<a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>) : '-/-'}</div>
          </div>
          <div className="account-item col-6"> <b>Тип работодателя</b>
            <div>{userInfo.typeEmployer ? (
              bildTypeList(userInfo.typeEmployer, fields.typeEmployer.options).map((item, index) => (
                <span key={index}>{item}</span>
              ))
            ) : '-/-'}</div>
          </div>
          <div className="account-item col-6"> <b>Телефоны</b>
            <div>{userInfo.phones ? (
              <>
                {userInfo.phones.map((item, index) => (
                  <div key={index}>
                    <a href={`mailto:+7${item.phones}`}>+7{formatPhone(item.phones)}</a>
                  </div>
                ))}
              </>
            ) : '-/-'}
            </div>
          </div>
          <div className="account-item col-6"> <b>Тип компании</b>
            <div> {userInfo.typeJob ? (
              bildTypeList(userInfo.typeJob, fields.typeJob.options).map((item, index) => (
                <span key={index}>{item}, </span>
              ))
            ) : '-/-'}</div>
          </div>
          <div className="account-item col-6"> <b>Краткое описание компании</b>
            <div> {userInfo.description_company ? userInfo.description_company : '-/-'}</div>
          </div>
          <div className="account-item col-6"> <b>Количество сотрудников</b>
            <div> {userInfo.num_workers ? userInfo.num_workers : '-/-'}</div>
          </div>
          <div className="account-item col-6"> <b>Видеоприветствие</b>
            <div> {userInfo.videoCompany ? (
              <video className='video-account' width="200px" height="auto" controls="controls" >
                <source src={userInfo.videoCompany} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
              </video>
            ) : '-/-'}</div>
          </div>
          <div className="col-12"><h3>Реквизиты компании</h3></div>
          <div className="account-item col-6"> <b>Юридическое наименование организации</b>
            <div> {userInfo.legalNameCompany ? (
              <>
                <span>{userInfo.legalNameCompany.type} - {userInfo.legalNameCompany.name}</span>
              </>
            ) : '-/-'}</div>
          </div>
          <div className="account-item col-6"> <b>Центральный офис компании</b>
            <div> {userInfo.centralOffice ? (
              <>
                <span>{userInfo.centralOffice.city} - {userInfo.centralOffice.address}</span>
              </>
            ) : '-/-'}</div>
          </div>
          <div className="account-item col-6"> <b>Как добраться до офиса</b>
            <div> {userInfo.how_get ? userInfo.how_get : '-/-'}</div>
          </div>
          <div className="account-item col-6"> <b>ИНН компании</b>
            <div> {userInfo.inn_company ? userInfo.inn_company : '-/-'}</div>
          </div>
          <div className="account-item col-6"> <b>КПП компании</b>
            <div> {userInfo.kpp ? userInfo.kpp : '-/-'}</div>
          </div>
          <div className="account-item col-6"> <b>Банк</b>
            <div> {userInfo.bank ? userInfo.bank : '-/-'}</div>
          </div>
          <div className="account-item col-6"> <b>БИК</b>
            <div> {userInfo.num_workers ? userInfo.num_workers : '-/-'}</div>
          </div>
          <div className="account-item col-6"> <b>К/С</b>
            <div> {userInfo.bik ? userInfo.bik : '-/-'}</div>
          </div>
          <div className="account-item col-6"> <b>Р/С</b>
            <div> {userInfo.pc ? userInfo.pc : '-/-'}</div>
          </div>
          <div className="account-item col-6"> <b>Юридический адрес</b>
            <div> {userInfo.legal_address ? userInfo.legal_address : '-/-'}</div>
          </div>
          <div className="account-item col-6"> <b>Закрывающие документы</b>
            <div> {userInfo.closeDoc ? (
              bildTypeList(userInfo.closeDoc, fields.closeDoc.options).map((item, index) => (
                <span key={index}>{item}, </span>
              ))
            ) : '-/-'}</div>
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
