
const BtnListControls = ({ idPopup, children, name, onShowPopup }) => {



  return (
    <div className="btn-item">
      <div
        className="btn btn-filters btn--white-border btn--list"
        onClick={() => { onShowPopup(idPopup) }}
      >
        <span>{name}</span><i></i>
      </div>
      {children}
    </div>
  )

};


export default BtnListControls;