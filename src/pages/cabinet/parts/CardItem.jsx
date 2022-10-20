import Controls from 'pages/cabinet/parts/cards/Controls';
import CardsUpdate from 'pages/cabinet/parts/cards/CardsUpdate';

import { Link } from 'react-router-dom';

const ListItem = ({
  listing,
  onDelete,
  onEdit,
  onActivate,
  currentCard,
  id,
  cabinetType

}) => {


  return (
    <>
      <td>
        <div className="cards-account-topic">
          <Link to={`/catalog/${cabinetType}/${id}`}>{listing.card_name}</Link>
        </div>
      </td>
      <td>
        <div className="cards-item-salary">
          {listing.salary_price && (<b>Р {listing.salary_price}</b>)}
          {listing.salary_worktime && (<span>{listing.salary_worktime}</span>)}
        </div>


      </td>
      <td>
        <CardsUpdate update={listing.timestamp} />
      </td>
      <td>
        <div className={listing.activeCards === 'off' ?
          'cards-status cards-status--noactive' :
          'cards-status cards-status--active'}>
          {listing.activeCards === 'off' ? 'Не активно' : 'Активно'}
        </div>
      </td>
      <td>
        <Controls
          id={id}
          name={listing.name}
          onEdit={onEdit}
          onDelete={onDelete}
          onActivate={onActivate}
          currentCard={currentCard}
        />
      </td>
    </>
  )
}

export default ListItem;