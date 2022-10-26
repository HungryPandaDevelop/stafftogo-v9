import _ from "lodash";

import Moment from 'react-moment';

import { connect } from 'react-redux';
import ActionFn from 'store/actions';
import { getMyRoomMessages } from 'store/asyncActions/inviteChat';
import { getSingleListing } from "store/asyncActions/getSingleListing";

import { useState, useEffect } from 'react';

const Messages = ({ roomId, uid, roomUpdate }) => {

  const [messages, setMessages] = useState([]);
  const [startSee, setStartSee] = useState(0);
  const [loadingMessages, setLoadingMessages] = useState(true);
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

  return (
    <>
      {result ? result.map((item, index) => (
        <div className={`chat-messages-item ${uid === item.uid && 'own-messages'}`} key={index} >
          {uid !== item.uid && (
            <div class="chat-list-img img-cover" >
            </div>
          )}
          <div className="chat-messages-body">
            <div className="chat-messages-date">{item.text}</div>
            <div className="chat-messages-text"> {<Moment unix>{item.timestamp.seconds}</Moment>}</div>
          </div>
          {uid === item.uid && (
            <div class="chat-list-img img-cover" >
            </div>
          )}
        </div>
      )) : 'Список сообщений пуст'}
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    roomId: state.accountInfo.roomId,
    roomUpdate: state.accountInfo.roomUpdate,

  }
}

export default connect(mapStateToProps, { ActionFn })(Messages);