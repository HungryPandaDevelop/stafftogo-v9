
const ControlsDefault = ({ onEdit, onDelete, onActivate, id, name, currentCard }) => {
  return (
    <div className="btn-container">
      <div
        className='table-btn table-btn--edit'
        onClick={() => onEdit(id)}
      >
      </div>

      <div
        className="table-btn table-btn--delete"
        onClick={() => onDelete(id, name)}
      >
      </div>

    </div>
  )
}

export default ControlsDefault;
