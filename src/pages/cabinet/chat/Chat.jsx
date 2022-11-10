
import { useState } from 'react';
import { useParams } from 'react-router-dom';

// import { sendMessage } from 'store/asyncActions/getMessageAsync';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import { connect } from 'react-redux';
import RoomList from 'pages/cabinet/chat/RoomList';
import Messages from 'pages/cabinet/chat/Messages';
import ChatForm from 'pages/cabinet/chat/ChatForm';



const Chat = ({ uid }) => {


  const params = useParams();

  const [currentInfoChat, setCurrentInfoChat] = useState(null);
  const [updateChat, setUpdateChat] = useState(false);

  return (

    <TemplateAccount title='Чат' addWrapClass='cabinet-account-chat'>
      <div className="main-grid">
        <div className="col-3 chat-cell">
          <RoomList uid={uid} roomId={params.roomUr} setCurrentInfoChat={setCurrentInfoChat} />
        </div>
        <div className="col-9 chat-cell">
          <div className="chat-messages">
            {currentInfoChat && (
              <div className="chat-messages-head">
                <div
                  className="chat-list-img img-cover"
                  style={{ backgroundImage: `url(${currentInfoChat[2]})` }}
                >
                </div>
                <div className="chat-list-cardsname">{currentInfoChat[0]}</div>
                <div className="chat-list-accountname">{currentInfoChat[1]}</div>
              </div>
            )}

            {(params.roomUrl) ? (<>
              <Messages uid={uid} roomId={params.roomUrl} updateChat={updateChat} setUpdateChat={setUpdateChat} />
              <ChatForm uid={uid} roomId={params.roomUrl} updateChat={updateChat} setUpdateChat={setUpdateChat} />
            </>) : 'Выберете окно чата'}
          </div>
        </div>
      </div>
    </TemplateAccount >

  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.info.uid,
  }
}

export default connect(mapStateToProps)(Chat);

// export default Chat;