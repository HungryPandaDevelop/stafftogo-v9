import { saveInfo } from 'store/asyncActions/saveInfo';
import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import view from 'front-end/images/icons/hide-view-white.svg';

const BtnLike = ({ accountInfo, listing, ActionFn, checkingStatus, locationBtn, elementIdDetail }) => {


  const idElement = listing.id ? listing.id : elementIdDetail;


  const addLike = () => {

    let sendData;

    if (accountInfo.hideMass) {
      const filterLike = accountInfo.hideMass.filter(like => like !== idElement);
      if (accountInfo.hideMass.includes(idElement)) {
        sendData = { hideMass: filterLike };
      } else {
        sendData = { hideMass: [...accountInfo.hideMass, idElement] };
      }

    } else {
      sendData = { hideMass: [idElement] };
    }

    saveInfo(sendData, accountInfo.uid, 'users').then(() => {
      ActionFn('SET_INFO_ACCOUNT', { ...accountInfo, hideMass: sendData.hideMass });
    });
  }

  return (
    <>
      <>
        {(!checkingStatus) &&
          <div
            className={`sidebar-btn ${accountInfo.hideMass && accountInfo.hideMass.includes(idElement) && 'active'}`}
            onClick={addLike} >
            <span>Спрятать</span><img src={view} alt="" /></div>
        }
      </>
    </>
  )

}


const mapStateToProps = (state) => {

  return {

    accountInfo: state.accountInfo.info,
    checkingStatus: state.accountInfo.checkingStatus,

  }
}


export default connect(mapStateToProps, { ActionFn })(BtnLike);