import CardsControlsDefault from 'pages/cabinet/parts/cardsDefault/CardsControlsDefault';

const CardsItemDefault = ({
  listing,
  onDelete,
  onEdit,
  id,
  whatshow
}) => {


  return (
    <>
      {whatshow.map((item, index) => {
        return (<td key={index}>{listing[item]}</td>)
      })}

      <td>
        <CardsControlsDefault
          id={id}
          name={listing.name}
          onEdit={onEdit}
          onDelete={onDelete}

        />
      </td>
    </>
  )
}

export default CardsItemDefault;