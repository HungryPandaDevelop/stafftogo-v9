import { connect } from 'react-redux';

import { useEffect, useState } from 'react';

import ActionFn from 'store/actions';

import { createRoom } from 'store/asyncActions/inviteChat';
import { sendMessage } from 'store/asyncActions/inviteChat';

import defaultCardsImg from 'front-end/images/icons/avatar-light-gray.svg'

import { getListing } from 'store/asyncActions/getListing';

const BtnInvite = ({
  accountInfo,
  listing,
  uid,
  ActionFn,
  roomUpdate
}) => {
  // console.log(accountInfo.currentCard[0])
  const [invited, setInvited] = useState([]);

  useEffect(() => {
    let isMounted = true;

    uid && getListing('message', uid, 'inviteBtn', listing.id).then(res => {
      if (isMounted) {
        // console.log('elementId', res.map(el => el.data.owmListingId))
        setInvited(res.map(el => el.data.owmListingId));
        ActionFn('UPDATE_ROOM', false);
      }
    });

    return () => { isMounted = false };
  }, [uid, roomUpdate]);


  let inviteStatus = invited && invited.includes(accountInfo.currentCard[0]);



  const onInvite = () => {
    const imgListing = listing.data.userInfo.imgsAccount ? listing.data.userInfo.imgsAccount : defaultCardsImg;
    const imgOwn = accountInfo.imgsAccount ? accountInfo.imgsAccount : defaultCardsImg;


    !inviteStatus &&
      createRoom(
        listing.id,
        uid,
        listing.data.userRef,
        listing.data.card_name,
        imgListing,
        listing.data.userInfo.accountName,
        accountInfo.currentCard[1],
        accountInfo.accountName,
        imgOwn,
        accountInfo.currentCard[0],
        accountInfo.typeCabinet,
        listing.data.userInfo.typeCabinet
      ).then((res) => {
        // console.log('room cre', listing.data.userInfo.typeCabinet)
        ActionFn('UPDATE_ROOM', true);


        sendMessage(res, 'Новый отклик', uid);
      });

  }


  return (
    <div
      className={`btn btn--orange-border response-btn ${inviteStatus && 'active'}`}
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