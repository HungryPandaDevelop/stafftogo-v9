
import { useEffect } from "react"

import { Link, useParams } from 'react-router-dom';


const RoomItem = ({ room, uid, roomId, ActionFn, setCurrentInfoChat, onDelete }) => {

  const params = useParams();

  useEffect(() => {


    if (params.roomUrl === room.id) {

      changeRoom(room)
    }

  }, [params.roomUrl]);

  const changeRoom = (setRoom) => {


    if (setRoom.data.uid === uid) {
      setCurrentInfoChat([setRoom.data.ownInvitedName, setRoom.data.ownInvitedNameAccount, setRoom.data.ownInvitedImg]);


    } else {

      setCurrentInfoChat([setRoom.data.hisInvitingName, setRoom.data.hisInvitingNameAccount, setRoom.data.hisInvitingImg]);
    }
  }



  return (
    <div

      // onClick={() => {
      //   changeRoom(room);
      // }}
      className={`chat-list-item ${(roomId === room.id) && 'active'}`} >
      <Link to={`/cabinet/chat/${room.id}`}>
        {room.data.uid === uid ? (<div
          className="chat-list-img img-cover"
          style={{ backgroundImage: `url(${room.data.ownInvitedImg})` }}
        >
        </div>) : (<div
          className="chat-list-img img-cover"
          style={{ backgroundImage: `url(${room.data.hisInvitingImg})` }}
        >
        </div>)}

      </Link>
      <Link to={`/cabinet/chat/${room.id}`}>
        <div className="chat-list-about">
          <div className="chat-list-cardsname">
            {
              room.data.uid === uid ?
                room.data.ownInvitedName
                :
                room.data.hisInvitingName
            }
          </div>
          <div className="chat-list-accountname">
            {
              room.data.uid === uid ?
                room.data.ownInvitedNameAccount
                :
                room.data.hisInvitingNameAccount
            }</div>
        </div>
      </Link>
      <Link to="/cabinet/chat/" className="table-btn table-btn--delete" onClick={onDelete}></Link>

    </div>
  )
}




export default RoomItem;


// ActionFn('CHANGE_ROOM', setRoom.id);
// roomId: state.accountInfo.roomId,