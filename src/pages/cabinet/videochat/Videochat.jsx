
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import MainScreen from 'pages/cabinet/videochat/parts/MainScreen';


import { Link, useParams } from 'react-router-dom';


const Videochat = () => {
  const params = useParams();





  return (
    <TemplateAccount title='Чат' addWrapClass='cabinet-account'>
      {params.userId}
      <div className="main-full">
        <h3>Видеочат</h3>
      </div>
      <div className="btn-container">
        <Link className='btn btn--orange-border' to='/cabinet/videochat/videolist-out'>Исходящие звонки</Link>
        <Link className='btn btn--green-border' to='/cabinet/videochat/videolist-in'>Входящие звонки</Link>
      </div>

    </TemplateAccount >
  )
}

export default Videochat