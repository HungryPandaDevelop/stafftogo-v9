import { connect } from 'react-redux';

import ActionFn from 'store/actions';

import { createRoom } from 'store/asyncActions/inviteChat';

const BtnInvite = ({ currentCard, listing, uid, invited, accountInfo, ActionFn }) => {



  let inviteStatus = invited && invited.includes(listing.id);

  const onInvite = () => {

    !inviteStatus && createRoom(currentCard, listing.id, uid, listing.data.userRef).then(() => {
      ActionFn('UPDATE_ROOM', true);
    });

  }


  return (
    <div
      className={`btn btn--orange-border ${inviteStatus && 'active'}`}
      onClick={onInvite}
    >

      {inviteStatus ? 'Вы откликнулись' : 'Откликнуться'}

    </div>
  )
}


export default connect(null, { ActionFn })(BtnInvite);