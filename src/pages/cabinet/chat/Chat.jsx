
import { useParams } from 'react-router-dom';

// import { sendMessage } from 'store/asyncActions/getMessageAsync';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import { connect } from 'react-redux';
import RoomList from 'pages/cabinet/chat/RoomList';
import Messages from 'pages/cabinet/chat/Messages';
import ChatForm from 'pages/cabinet/chat/ChatForm';

const Chat = ({ uid, roomId }) => {

  const params = useParams();



  return (

    <TemplateAccount title='Чат' addWrapClass='cabinet-account-chat'>
      <div className="main-grid">
        <div className="col-3">
          <RoomList uid={uid} roomId={roomId} />
        </div>
        <div className="col-9">
          <div className="chat-messages">
            <div class="chat-messages-head">
              <div class="chat-list-img img-cover" >
              </div>
              <div class="chat-list-cardsname">React Разработчик</div>
              <div class="chat-list-accountname">Cotton Club</div>
            </div>
            {!params.roomId && !roomId ? 'Выберете окно чата' : (
              <div className='chat-messages-list'>
                <Messages uid={uid} />
                <ChatForm uid={uid} />
              </div>

            )}
          </div>
        </div>
      </div>
    </TemplateAccount >

  )
}


const mapStateToProps = (state) => {
  // console.log(state.accountInfo)
  return {
    uid: state.accountInfo.info.uid,
    roomId: state.accountInfo.roomId,
  }
}

export default connect(mapStateToProps)(Chat);

// export default Chat;