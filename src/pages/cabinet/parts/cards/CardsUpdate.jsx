import SimpleDateTime from 'react-simple-timestamp-to-date';

const CardsUpdate = ({ update }) => {
  return (
    <div className="cards-date">
      <SimpleDateTime
        format="MYD"
        showTime="0"
        dateSeparator="."
      >{update.seconds}</SimpleDateTime>
    </div>
  )
}

export default CardsUpdate
