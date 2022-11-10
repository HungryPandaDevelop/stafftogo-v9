
import { useState, useEffect } from 'react';

import { getListing } from 'store/asyncActions/getListing';
import { onDeleteCards } from 'store/asyncActions/getListing';
import RoomItem from 'pages/cabinet/chat/RoomItem';


const RoomList = ({ uid, setCurrentInfoChat }) => {


  const [rooms, setRooms] = useState();


  useEffect(() => {

    getListing('message', uid, 'rooms').then(res => {
      setRooms(res);
    });

  }, []);



  const deleteItem = (listings, id) => {
    onDeleteCards(listings, id, 'message').then(res => {
      setRooms(res);
      setCurrentInfoChat(false)
    });
  }
  return (
    <div className='chat-list'>
      {rooms && rooms.map(room => <RoomItem
        key={room.id}
        room={room}
        listing={rooms}
        setCurrentInfoChat={setCurrentInfoChat}
        onDelete={() => deleteItem(rooms, room.id)}
      />)}
    </div>
  )
}


export default RoomList;