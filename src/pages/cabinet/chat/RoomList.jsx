
import { useState, useEffect } from 'react';

import { getListing } from 'store/asyncActions/getListing';
import RoomItem from 'pages/cabinet/chat/RoomItem';


const RoomList = ({ uid, setCurrentInfoChat }) => {


  const [rooms, setRooms] = useState();


  useEffect(() => {

    getListing('message', uid, 'rooms').then(res => {
      setRooms(res);

    });

  }, []);




  return (
    <div className='chat-list'>
      {rooms && rooms.map(room => <RoomItem key={room.id} room={room} setCurrentInfoChat={setCurrentInfoChat} />)}
    </div>
  )
}


export default RoomList;