import { Link } from 'react-router-dom';
import Routess from 'pages/Routes';

const Breadcrumbs = () => {
  return (
    <div className="main-full">
      <div className="breadcrumbs"><a href="#">Главная</a><span>/</span>
        <a href="#">Категория</a><span>/</span><span>Резюме список</span></div>
      {Routess.map(({ path, name, Component }, key) => (
        <Link to={path} key={key}>{name}</Link>
      ))}
    </div>
  )
}

export default Breadcrumbs
