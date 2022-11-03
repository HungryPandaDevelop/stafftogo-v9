import { connect } from 'react-redux';

import CabinetHeader from 'blocks/header/CabinetHeader';
import NavNoLogged from 'blocks/header/NavNoLogged';

const CheckLogged = ({ uid, checkingStatus, showPopup }) => {

  return (
    <div className='vertical-align col-3 col-lg-4 col-md-2 col-sm-6'>
      <div className="cabinet-header">
        {checkingStatus ? 'Loading...' : (uid ? <CabinetHeader showPopup={showPopup} /> : <NavNoLogged showPopup={showPopup} />)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.info.uid,
    checkingStatus: state.accountInfo.checkingStatus
  }
};

export default connect(mapStateToProps)(CheckLogged);