import { Link } from 'react-router-dom';

import { getAuth } from 'firebase/auth';


const CabinetPopup = ({ userInfo, onCabinetPopupShow, myRoomsMessage }) => {
  const auth = getAuth();

  return (
    <div className="cabinet-popup">
      <div className="cabinet-popup-roof">
        <Link to={`/cabinet/${userInfo.typeCabinet}-new`} className="btn-header-cards btn-header"></Link>
        <Link to='/cabinet/chat' className="btn-header-chat btn-header">
          {myRoomsMessage.length > 0 && <div className="new-message-warning"></div>}
        </Link>
        <Link to='/cabinet/liked' className="btn-header-favorites btn-header"></Link>
      </div>
      <div className="cabinet-popup-info">
        <div className="cabinet-popup-name">{userInfo.accountName}</div>
        <div className="cabinet-popup-mail">{userInfo.email}</div>
      </div>
      <div className="cabinet-popup-controls">
        <Link
          to="/cabinet/"
          className="btn btn--green-border"
          onClick={onCabinetPopupShow}
        >В кабинет</Link>
        <div onClick={() => auth.signOut()} className="btn btn--red-border">Выйти</div>
      </div>
    </div>
  )
}

export default CabinetPopup
