import ActionFn from 'store/actions';
import { connect } from 'react-redux';

import { useEffect } from "react"

import { Link, useParams } from 'react-router-dom';

import defaultCardsImg from 'front-end/images/icons/avatar-light-gray.svg'


const RoomItem = ({ room, uid, roomId, ActionFn }) => {

  const params = useParams();

  useEffect(() => {
    // console.log(room.data.masterId, room.data.ownId)

    if (params.roomUrl) {
      changeRoom(params.roomUrl)
    }

  }, []);

  const changeRoom = (setRoom) => {
    ActionFn('CHANGE_ROOM', setRoom);
  }
  console.log(room.data.hisInvitingImg)

  const imgCards = room.data.hisInvitingImg ? room.data.hisInvitingImg : defaultCardsImg;
  return (
    <Link
      to={`/cabinet/chat/${room.id}`}
      onClick={() => { changeRoom(room.id) }}
      className={`chat-list-item ${(roomId === room.id) && 'active'}`} >
      <div
        className="chat-list-img img-cover"
        style={{ backgroundImage: `url(${imgCards})` }}
      >
      </div>
      <div className="chat-list-about">
        <div className="chat-list-cardsname">
          {
            room.data.uid === uid ?
              room.data.hisInvitingName
              :
              room.data.ownInvitedName
          }
        </div>
        <div className="chat-list-accountname">OOO Рога и копыта</div>
      </div>


    </Link>
  )
}

const mapStateToProps = (state) => {

  return {
    uid: state.accountInfo.info.uid,
    roomId: state.accountInfo.roomId,
  }
}


export default connect(mapStateToProps,
  {
    ActionFn
  })(RoomItem);


//   <Link
//   to={`/cabinet/chat/${room.id}`}
//   onClick={() => { changeRoom(room.id) }}
//   className={`chat-list-item ${(roomId === room.id) && 'active'}`} >
//   {
//     room.data.masterId === uid ?
//       'Я позвал ' + room.data.hisInvitingName + ' на ' + room.data.ownInvitedName
//       :
//       'Меня позвали ' + room.data.ownInvitedName + ' на ' + room.data.hisInvitingName
//   }

// </Link>