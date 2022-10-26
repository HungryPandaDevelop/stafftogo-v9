import ActionFn from 'store/actions';
import { connect } from 'react-redux';

import { useEffect } from "react"

import { Link, useParams } from 'react-router-dom';

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

  return (
    <Link
      to={`/cabinet/chat/${room.id}`}
      onClick={() => { changeRoom(room.id) }}
      className={`chat-list-item ${(roomId === room.id) && 'active'}`} >
      {
        room.data.masterId === uid ?
          room.data.hisInvitingName
          :
          room.data.ownInvitedName
      }
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