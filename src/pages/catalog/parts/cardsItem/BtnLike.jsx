
import { saveInfo } from 'store/asyncActions/saveInfo';
import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import star from 'front-end/images/icons/star-white.svg';

const BtnLike = ({ accountInfo, listing, ActionFn, checkingStatus, locationBtn }) => {


  const idElement = listing.id;


  const addLike = () => {

    let sendData;

    if (accountInfo.likeMass) {
      const filterLike = accountInfo.likeMass.filter(like => like !== idElement);
      if (accountInfo.likeMass.includes(idElement)) {
        sendData = { likeMass: filterLike };
      } else {
        sendData = { likeMass: [...accountInfo.likeMass, idElement] };
      }

    } else {
      sendData = { likeMass: [idElement] };
    }

    saveInfo(sendData, accountInfo.uid, 'users').then(() => {
      ActionFn('SET_INFO_ACCOUNT', { ...accountInfo, likeMass: sendData.likeMass });
    });
  }
  console.log(accountInfo.likeMass, idElement)
  return (
    <>
      {(!checkingStatus) && (locationBtn === 'catalog') ?
        <div className={`like-btn ${accountInfo.likeMass && accountInfo.likeMass.includes(idElement) && 'active'}`} onClick={addLike}></div>
        :
        <div className={`sidebar-btn ${accountInfo.likeMass && accountInfo.likeMass.includes(idElement) && 'active'}`}> <span>В избранное</span><img src={star} alt="" /></div>
      }
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