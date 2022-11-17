
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';


import Videos from 'pages/cabinet/videochat/parts/Videos';

import { useParams } from 'react-router-dom';


const Videochat = () => {

  const params = useParams();

  return (
    <TemplateAccount title='Чат' >

      <div className="main-full">
        <h3>Входящий звонок</h3>

        <Videos joinRoomId={params.roomUrl} typeConnect='join' textBtn="Ответить" />
      </div>
    </TemplateAccount >
  )
}

export default Videochat;