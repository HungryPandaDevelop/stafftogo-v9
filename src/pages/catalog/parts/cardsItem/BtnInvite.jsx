import { connect } from 'react-redux';

import ActionFn from 'store/actions';

import { createRoom } from 'store/asyncActions/inviteChat';

const BtnInvite = ({ currentCard, listing, uid, invited, ActionFn }) => {



  let inviteStatus = invited && invited.includes(listing.id);

  const onInvite = () => {
    const img = listing.data.userInfo.imgsAccount ? listing.data.userInfo.imgsAccount : '';
    console.log('img', img)
    !inviteStatus && createRoom(
      listing.id,
      uid,
      listing.data.userRef,
      listing.data.card_name,
      listing.data.userInfo.imgsAccount,
      img,
      currentCard[1]
    ).then(() => {
      // console.log(currentCard, listing.id, uid, listing.data.userRef);
      ActionFn('UPDATE_ROOM', true);
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


export default connect(null, { ActionFn })(BtnInvite);