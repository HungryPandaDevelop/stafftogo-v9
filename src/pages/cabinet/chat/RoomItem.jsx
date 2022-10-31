import ActionFn from 'store/actions';
import { connect } from 'react-redux';

import { useEffect } from "react"

import { Link, useParams } from 'react-router-dom';

const RoomItem = ({ room, uid, roomId, ActionFn, setCurrentInfoChat }) => {

  const params = useParams();

  useEffect(() => {
    // console.log(room.data.masterId, room.data.ownId)

    if (params.roomUrl) {

      changeRoom(room)
    }

  }, []);

  const changeRoom = (setRoom) => {
    ActionFn('CHANGE_ROOM', setRoom.id);

    setCurrentInfoChat([setRoom.data.ownInvitedName, setRoom.data.ownInvitedNameAccount, setRoom.data.ownInvitedImg]);
  }




  return (
    <Link
      to={`/cabinet/chat/${room.id}`}
      onClick={() => {
        changeRoom(room);
      }}
      className={`chat-list-item ${(roomId === room.id) && 'active'}`} >
      <div
        className="chat-list-img img-cover"
        style={{ backgroundImage: `url(${room.data.hisInvitingImg})` }}
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
        <div className="chat-list-accountname">{room.data.hisInvitingNameAccount}</div>
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

