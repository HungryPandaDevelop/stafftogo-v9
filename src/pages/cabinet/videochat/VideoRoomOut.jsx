
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import { connect } from 'react-redux';

import Videos from 'pages/cabinet/videochat/parts/Videos';

const VideoRoomOut = ({ uid }) => {



  return (
    <TemplateAccount
      title='Видеочат'
      addWrapClass='cabinet-account'
    >

      <div className="main-full">
        <h3>Исходящий звонок</h3>


        <Videos uid={uid} typeConnect='create' textBtn="Позвонить" />
      </div>
    </TemplateAccount >
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.info.uid
  }
}



export default connect(mapStateToProps)(VideoRoomOut);