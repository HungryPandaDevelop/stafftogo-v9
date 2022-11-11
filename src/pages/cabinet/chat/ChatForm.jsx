import RenderFormAccount from 'components/forms/RenderFormAccount';

import { sendMessage } from 'store/asyncActions/inviteChat';
import { connect } from 'react-redux';

const ChatForm = ({ formData, fieldsChat, roomId, uid }) => {

  const onSubmitIn = () => {

    if (formData) {


      sendMessage(roomId, formData.message, uid).then(() => {
        // console.log('message send', formData.message);
        // setUpdateChat(!updateChat);
        formData.message = '';
      });


    }
    else {
      console.log('error')
    }
  }

  return (
    <div className="chat-messages-form" >
      <RenderFormAccount
        formClassAdd=" main-grid"
        btnSaveText="Отправить"
        objFields={fieldsChat}
        orderFields={fieldsChat.order}
        btnClass='btn-chat-send'
        onSubmitIn={onSubmitIn}
        btnWrapClass='btn-container col-1'
        sending={true}
      />
    </div >
  )
}


const mapStateToProps = (state) => {
  const formReducer = state.form.singleInput && state.form.singleInput.values;

  return {
    fieldsChat: state.fieldsChat, // база полей
    formData: formReducer,
  }
}

export default connect(mapStateToProps)(ChatForm);
