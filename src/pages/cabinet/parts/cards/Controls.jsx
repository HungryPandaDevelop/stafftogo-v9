
const Controls = ({ onEdit, onDelete, onActivate, id, name, currentCard }) => {
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
      <div
        className={`table-btn table-btn--view ${currentCard && currentCard[0] === id && `active`} `}
        onClick={() => onActivate(id)}
      >
      </div>

    </div>
  )
}

export default Controls
