
import { useState, useEffect } from 'react';

import { getListing } from 'store/asyncActions/getListing';

import { getRoomsOnline } from "store/asyncActions/inviteChat";
import { onDeleteCards } from 'store/asyncActions/getListing';
import RoomItem from 'pages/cabinet/chat/RoomItem';


const RoomList = ({ uid, setCurrentInfoChat, roomId }) => {


  const [rooms, setRooms] = useState();


  useEffect(() => {

    getRoomsOnline(setRooms, uid);

  }, []);




  const deleteItem = (listings, id) => {
    onDeleteCards(listings, id, 'message').then(res => {
      setRooms(res);
      setCurrentInfoChat(false)
    });
  }


  return (
    <div className='chat-list'>
      {console.log('room list render')}
      {rooms && rooms.map(room => {
        const unreadMessages = room.data.messages.filter(item => item.read === false);
        return (<RoomItem
          key={room.id}
          uid={uid}
          room={room}
          roomId={roomId}
          listing={rooms}
          messageLength={unreadMessages.length}
          setCurrentInfoChat={setCurrentInfoChat}
          onDelete={() => deleteItem(rooms, room.id)}
        />)
      })}
    </div>
  )
}


export default RoomList;