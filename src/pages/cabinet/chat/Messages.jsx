import moment from 'moment';


import { getMyRoomMessages } from 'store/asyncActions/inviteChat';
import { getSingleListing } from "store/asyncActions/getSingleListing";
import { updateRead } from "store/asyncActions/inviteChat";

import { useState, useEffect } from 'react';

const Messages = ({ roomId, uid, updateChat, setUpdateChat }) => {
  const [roomData, setRoomData] = useState({});
  const [messages, setMessages] = useState([]);
  const [startSee, setStartSee] = useState(0);

  useEffect(() => {



    getSingleListing('message', roomId).then(res => {

      setMessages(res.messages);
      setRoomData(res);
      // setLoadingMessages(false);
      getMyRoomMessages(roomId, setStartSee); // запуск просмотра


    });
  }, [roomId, startSee, updateChat]);


  let result;

  if (messages.length > 0) {

    result = messages.map((item) => item);

    result.sort(function (a, b) {
      var dateA = new Date(a.timestamp.seconds), dateB = new Date(b.timestamp.seconds);
      return dateA - dateB
    });

  }

  const getTime = (time) => {
    return moment.unix(time).format("MM.DD.YYYY HH:mm");
  }
  const setIsShown = () => {

    if (messages[messages.length - 1].uid !== uid) {
      messages.map((item) => {
        if (item.read === false) {
          setUpdateChat(!updateChat)
          updateRead(roomId, roomData);
        }
      })
    }


  }
  return (
    <div className='chat-messages-list'>
      {result ? result.map((item, index) => (
        <div className={`chat-messages-item ${uid === item.uid && 'own-messages'} ${item.read === false ? 'noread' : ''}`}
          key={index}
          onMouseEnter={() => setIsShown()}
        >
          {uid !== item.uid && (
            <div className="chat-list-img img-cover" >
            </div>
          )}
          <div className="chat-messages-body">
            <div className="chat-messages-date">
              {getTime(item.timestamp.seconds)}

            </div>
            <div className="chat-messages-text">{item.text}</div>
          </div>
          {uid === item.uid && (
            <div className="chat-list-img img-cover" >
            </div>
          )}
        </div>
      )) : 'Список сообщений пуст'}
    </div>
  )
}


export default Messages;