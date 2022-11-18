import moment from 'moment';


import { getMessagesOnline, stopOnline } from 'store/asyncActions/inviteChat';

import { updateRead } from "store/asyncActions/inviteChat";

import { useState, useEffect } from 'react';

const Messages = ({ roomId, uid }) => {

  const [messages, setMessages] = useState({});


  useEffect(() => {

    getMessagesOnline(roomId, setMessages);

    return () => {
      stopOnline();
    }
  }, [roomId]);


  let result;

  if (messages && messages.messages && messages.messages.length > 0) {

    result = messages.messages.map((item) => item);

    result.sort(function (a, b) {
      var dateA = new Date(a.timestamp.seconds), dateB = new Date(b.timestamp.seconds);
      return dateA - dateB
    });

  }

  const getTime = (time) => {
    return moment.unix(time).format("MM.DD.YYYY HH:mm");
  }
  const setIsShown = () => {

    if (messages.messages[messages.messages.length - 1].uid !== uid) {
      messages.messages.map((item) => {
        if (item.read === false) {

          updateRead(roomId, messages);
        }
      })
    }
  }

  const EmptyList = () => {
    return (<div className='empty-chat-list'>
      <i></i><span> Список сообщений пуст</span>
    </div>)
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
      )) : <EmptyList />}
    </div>
  )
}


export default Messages;