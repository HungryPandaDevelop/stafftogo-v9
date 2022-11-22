
const BtnListControls = ({ idPopup, children, name, onShowPopup, idVisiblePopup, additionalFilterValueObj, goToTop }) => {

  let count = 0;
  additionalFilterValueObj && Object.keys(additionalFilterValueObj).forEach(key => {

    if (additionalFilterValueObj[key].length > 0) {

      count++;
    }
  });

  return (
    <div className="btn-item">

      <div to='/catalog/'
        className={`btn btn-filters btn--white-border btn--list ${idPopup === idVisiblePopup && 'active'} `}
        onClick={() => { onShowPopup(idPopup); goToTop(); }}
      >
        <span>{count > 0 ? 'Выбраны доп. филтры' : name}</span><i></i>
      </div>
      {children}
    </div>
  )

};


export default BtnListControls;