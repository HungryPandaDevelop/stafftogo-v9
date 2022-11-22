import ControlsDefault from 'pages/cabinet/parts/cards/Controls';


import { Link } from 'react-router-dom';

const ListItem = ({
  listing,
  onDelete,
  onEdit,
  id,
  cabinetType,
}) => {


  return (
    <>
      <td>
        <div className="cards-account-topic">
          <Link to={`/catalog/${cabinetType}/${id}`}>{listing.card_name}</Link>
        </div>
      </td>
      <td>
        <ControlsDefault
          id={id}
          name={listing.name}
          onEdit={onEdit}
          onDelete={onDelete}

        />
      </td>
    </>
  )
}

export default ListItem;