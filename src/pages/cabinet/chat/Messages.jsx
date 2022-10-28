import _ from "lodash";

import Moment from 'react-moment';
import moment from 'moment';

import { connect } from 'react-redux';
import ActionFn from 'store/actions';
import { getMyRoomMessages } from 'store/asyncActions/inviteChat';
import { getSingleListing } from "store/asyncActions/getSingleListing";

import { useState, useEffect } from 'react';

const Messages = ({ roomId, uid, roomUpdate }) => {

  const [messages, setMessages] = useState([]);
  const [startSee, setStartSee] = useState(0);

  useEffect(() => {


    getSingleListing('message', roomId).then(res => {

      setMessages(res);
      // setLoadingMessages(false);
      getMyRoomMessages(roomId, setStartSee);
    });
  }, [roomId, startSee]);


  let result;
  // messages && console.log('messages.messages', messages)

  if (messages && !_.isEmpty(messages.messages)) {

    result = Object.keys(messages.messages).map((key) => messages.messages[key]);

    result.sort(function (a, b) {
      var dateA = new Date(a.timestamp.seconds), dateB = new Date(b.timestamp.seconds);
      return dateA - dateB
    });

  }

  const getTime = (time) => {
    return moment.unix(time).format("MM.DD.YYYY HH:mm");
  }

  return (
    <div className='chat-messages-list'>
      {result ? result.map((item, index) => (
        <div className={`chat-messages-item ${uid === item.uid && 'own-messages'}`} key={index} >
          {uid !== item.uid && (
            <div class="chat-list-img img-cover" >
            </div>
          )}
          <div className="chat-messages-body">
            <div className="chat-messages-date">
              {getTime(item.timestamp.seconds)}

            </div>
            <div className="chat-messages-text">{item.text}</div>
          </div>
          {uid === item.uid && (
            <div class="chat-list-img img-cover" >
            </div>
          )}
        </div>
      )) : 'Список сообщений пуст'}
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    roomId: state.accountInfo.roomId,
    roomUpdate: state.accountInfo.roomUpdate,

  }
}

export default connect(mapStateToProps, { ActionFn })(Messages);