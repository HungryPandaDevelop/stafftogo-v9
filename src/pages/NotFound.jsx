import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="stub"></div>
      <div className='content'>
        <div className="main-full">
          <h2>Страница не найдена</h2>
          <div className="btn-container">
            <Link to='/' className='btn btn--orange'>Вернуться на главную</Link>
          </div>

        </div>

      </div>
    </>
  )
}

export default NotFound
