
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import { Link } from 'react-router-dom';



const Videochat = () => {

  return (
    <TemplateAccount title='Чат' addWrapClass='cabinet-account'>
      <div className="main-full">
        <h3>Видеочат</h3>
      </div>
      <div className="btn-container">
        <Link className='btn btn--orange-border' to='/cabinet/liked'>Избранное</Link>
      </div>

    </TemplateAccount >
  )
}




export default Videochat;