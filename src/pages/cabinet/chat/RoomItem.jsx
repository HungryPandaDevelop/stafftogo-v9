
import { useEffect } from "react"

import { Link, useParams } from 'react-router-dom';


const RoomItem = ({ room, uid, roomId, setCurrentInfoChat, onDelete, messageLength }) => {

  const params = useParams();

  useEffect(() => {


    if (params.roomUrl === room.id) {
      changeRoom(room);
    }

    // console.log(room.data.messages)
    // const newMessages = room.data.messages.filter(item => item.read === false)
    // console.log('render room item')

  }, [params.roomUrl]);

  const changeRoom = (setRoom) => {

    if (setRoom.data.uid === uid) {
      setCurrentInfoChat([setRoom.data.hisInvitingName, setRoom.data.hisInvitingNameAccount, setRoom.data.hisInvitingImg]);


    } else {

      setCurrentInfoChat([setRoom.data.ownInvitedName, setRoom.data.ownInvitedNameAccount, setRoom.data.ownInvitedImg]);
    }
  }


  return (
    <div

      className={`chat-list-item ${(roomId === room.id) && 'active'}`} >
      <Link to={`/cabinet/chat/${room.id}`} className="chat-list-link"></Link>
      <div className="chat-list-img-wrap">

        {room.data.uid === uid ? (<div
          className="chat-list-img img-cover"
          style={{ backgroundImage: `url(${room.data.hisInvitingImg})` }}
        >
        </div>) : (<div
          className="chat-list-img img-cover"
          style={{ backgroundImage: `url(${room.data.ownInvitedImg})` }}
        >
        </div>)}


        {messageLength > 0 && <div className="new-message-warning"></div>}

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
        <div className="chat-list-accountname">
          {
            room.data.uid === uid ?
              room.data.hisInvitingNameAccount
              :
              room.data.ownInvitedNameAccount
          }
        </div>
        <div className="chat-list-cardssubname">
          на             {
            room.data.uid === uid ?
              room.data.ownInvitedName
              :
              room.data.hisInvitingName
          }
        </div>
      </div>

      <Link to="/cabinet/chat/" className="table-btn table-btn--delete" onClick={onDelete}></Link>

    </div>
  )
}




export default RoomItem;


// ActionFn('CHANGE_ROOM', setRoom.id);
// roomId: state.accountInfo.roomId,