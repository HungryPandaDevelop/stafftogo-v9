import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import UserList from 'blocks/header/sigin/UserList';
import CabinetPopup from 'blocks/header/sigin/CabinetPopup';
import { Link } from 'react-router-dom';
import ActionFn from 'store/actions';

import avatar from 'front-end/images/icons/avatar-white.svg';

const CabinetHeader = ({ userInfo, showPopup }) => {

  const [cabinetPopupShow, setCabinetPopupShow] = useState(false);


  useEffect(() => {
    const hideByBody = (e) => {
      if (e.target.className !== 'cabinet-header-avatar img-cover') {
        setCabinetPopupShow(false)
      }
      if (e.key === 'Escape') { setCabinetPopupShow(false); }
    }
    document.addEventListener('keydown', hideByBody);
    document.body.addEventListener('click', hideByBody);
    return () => {
      document.body.removeEventListener('click', hideByBody)
      document.body.removeEventListener('keydown', hideByBody)
    };
  }, []);


  const onCabinetPopupShow = () => {
    setCabinetPopupShow(!cabinetPopupShow);
  }
  return (
    //<UserList /> // УДАЛИТЬ ПОТОМ, если сейчас удалить, что то да сломается
    <>
      <UserList />
      <div className="sigin-body">
        <Link to={`/cabinet/${userInfo.typeCabinet}-new`} className="btn-header-cards btn-header"></Link>
        <Link to='/cabinet/chat' className="btn-header-chat btn-header"></Link>
        <Link to='/cabinet/liked' className="btn-header-favorites btn-header"></Link>
        <div
          className={`cabinet-header-avatar-container ${cabinetPopupShow ? 'active' : ''}`}
          onClick={onCabinetPopupShow}
        >
          <div
            className="cabinet-header-avatar img-cover"
            style={{ backgroundImage: `url(${userInfo.imgsAccount ? userInfo.imgsAccount : avatar})` }}
          >
          </div>
        </div>
        <div className="hamburger-btn element-btn" onClick={showPopup}></div>
        {cabinetPopupShow && <CabinetPopup userInfo={userInfo} onCabinetPopupShow={onCabinetPopupShow} />}
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.accountInfo.info,
    changeInfo: state.accountInfo.changeInfo,
  }
}

export default connect(mapStateToProps,
  {
    ActionFn
  })(CabinetHeader);