import { Link } from 'react-router-dom';

import { getAuth } from 'firebase/auth';


const CabinetPopup = ({ userInfo, onCabinetPopupShow }) => {
  const auth = getAuth();

  return (
    <div className="cabinet-popup">
      <div className="cabinet-popup-roof"></div>
      <div className="cabinet-popup-info">
        <div className="cabinet-popup-name">{userInfo.fio}</div>
        <div className="cabinet-popup-mail">{userInfo.email}</div>
      </div>
      <div className="cabinet-popup-controls">
        <Link
          to="/cabinet/"
          className="btn btn--gren-border"
          onClick={onCabinetPopupShow}
        >В кабинет</Link>
        <div onClick={() => auth.signOut()} className="btn btn--red-border">Выйти</div>
      </div>
    </div>
  )
}

export default CabinetPopup
