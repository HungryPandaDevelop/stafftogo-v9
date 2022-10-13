import { Link } from 'react-router-dom';

const BtnListControls = ({ idPopup, children, name, onShowPopup, idVisiblePopup, additionalFilterValueObj }) => {

  let count = 0;
  additionalFilterValueObj && Object.keys(additionalFilterValueObj).forEach(key => {

    if (additionalFilterValueObj[key].length > 0) {

      count++;
    }
  });

  return (
    <div className="btn-item">

      <Link to='/catalog/'
        className={`btn btn-filters btn--white-border btn--list ${idPopup === idVisiblePopup && 'active'} ${count > 0 && 'filter-in'} `}
        onClick={() => { onShowPopup(idPopup) }}
      >
        <span>{name}</span><i></i>
      </Link>
      {children}
    </div>
  )

};


export default BtnListControls;