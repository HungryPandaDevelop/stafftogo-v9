import { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { useNavigate } from "react-router-dom";

import ActionFn from 'store/actions';

import defaultCardsImg from 'front-end/images/icons/avatar-light-gray.svg';

import { createRoom } from 'store/asyncActions/inviteChat';

import { getListing } from 'store/asyncActions/getListing';

const BtnChat = ({
  accountInfo,
  listing,
  uid,
  ActionFn,
  roomUpdate,
  elementId
}) => {

  const navigate = useNavigate();


  const [invited, setInvited] = useState([]);

  const [currentRoom, setCurrentRoom] = useState('');

  useEffect(() => {

    uid && getListing('message', uid, 'invite').then(res => {
      // console.log('res', res);
      setInvited(res.map(el => el.data.listingId));
      let roomThis = res.filter(el => el.data.listingId === elementId);
      roomThis.length > 0 && setCurrentRoom(roomThis[0].id)

      ActionFn('UPDATE_ROOM', false);
    });

  }, [uid, roomUpdate]);


  let inviteStatus = invited && invited.includes(elementId);

  const onInvite = () => {
    const imgListing = listing.userInfo.imgsAccount ? listing.userInfo.imgsAccount : defaultCardsImg;
    const imgOwn = accountInfo.imgsAccount ? accountInfo.imgsAccount : defaultCardsImg;


    !inviteStatus ? createRoom(
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

    ).then((res) => {
      // console.log(currentCard, listing.id, uid, listing.data.userRef);
      ActionFn('UPDATE_ROOM', true);

      navigate('/cabinet/chat/' + res.id, { replace: true })

    }) : navigate('/cabinet/chat/' + currentRoom, { replace: true });

  }



  return (
    <div
      className="btn btn--green-border"
      onClick={onInvite}
    >
      Чат
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



export default connect(mapStateToProps, { ActionFn })(BtnChat);