import imgLogo from 'front-end/images/logo.svg';
import { Link } from 'react-router-dom';
const Logo = () => {
  return (
    <div className="vertical-align col-1 col-sm-3">
      <Link className="logo" to="/"> <img src={imgLogo} alt="logo" /></Link>
    </div>
  )
}
export default Logo;