import { connect } from 'react-redux';

import { useEffect, useState } from 'react';

import ActionFn from 'store/actions';

import { createRoom } from 'store/asyncActions/inviteChat';

import defaultCardsImg from 'front-end/images/icons/avatar-light-gray.svg';

import { getListing } from 'store/asyncActions/getListing';

const BtnInvite = ({
  accountInfo,
  listing,
  uid,
  ActionFn,
  roomUpdate,
  elementId
}) => {

  const [invited, setInvited] = useState([]);

  useEffect(() => {

    uid && getListing('message', uid, 'inviteBtn', elementId).then(res => {

      setInvited(res.map(el => el.data.owmListingId));
      console.log('elementId', res.map(el => el.data.owmListingId))
      ActionFn('UPDATE_ROOM', false);
    });

  }, [uid, roomUpdate]);


  let inviteStatus = invited && invited.includes(accountInfo.currentCard[0]);

  const onInvite = () => {
    const imgListing = listing.userInfo.imgsAccount ? listing.userInfo.imgsAccount : defaultCardsImg;
    const imgOwn = accountInfo.imgsAccount ? accountInfo.imgsAccount : defaultCardsImg;


    !inviteStatus && createRoom(
      elementId,
      uid,
      listing.userRef,
      listing.card_name,
      imgListing,
      listing.userInfo.accountName,
      accountInfo.currentCard[1],
      accountInfo.accountName,
      imgOwn,
      accountInfo.currentCard[0]

    ).then(() => {
      // console.log(currentCard, listing.id, uid, listing.data.userRef);
      ActionFn('UPDATE_ROOM', true);
    });

  }


  return (
    <div
      className={`btn btn--green-border ${inviteStatus && 'active'}`}
      onClick={onInvite}
    >

      {inviteStatus ? 'Вы откликнулись' : 'Откликнуться'}

    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    roomUpdate: state.accountInfo.roomUpdate,
    uid: state.accountInfo.info.uid,
    accountInfo: state.accountInfo.info,
    cabinetType: state.accountInfo.info.typeCabinet,
    listingType: state.listingTypeReducer,
  }
}



export default connect(mapStateToProps, { ActionFn })(BtnInvite);