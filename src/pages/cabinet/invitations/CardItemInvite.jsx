
import { Link } from 'react-router-dom';
import SimpleDateTime from 'react-simple-timestamp-to-date';

const CardItemInvite = ({ listing, typeCabinet, onDelete }) => {


  const reverseTypeCabinet = (typeCabinet === 'vacancies') ? 'resume' : 'vacancies';

  const getTypeCabinetText = (cabinet) => { if (cabinet === 'vacancies') { return 'вакансию' } else { return 'резюме' }; };

  const statusArr = [['roger', 'Согласен'], ['turnoff', 'Отказать'], ['considered', 'Рассматривается']];

  const tagreender = (check) => {

    return statusArr.filter(el => el[0] === check).map((item, index) => (
      <div key={index} className={`status-btn status-btn--${item[0]} active`}>
        {item[1]}
      </div>
    ))

  }
  return (
    <tr>
      <td>
        Я отозвался на
        <div className="cards-account-topic">
          {getTypeCabinetText(reverseTypeCabinet)} <Link to={`/catalog/${reverseTypeCabinet}/${listing.data.listingId}`}> {listing.data.hisInvitingName}</Link>
        </div>
        По резюме {listing.data.ownInvitedName}
      </td>
      <td>
        <SimpleDateTime
          format="MYD"
          showTime="0"
          dateSeparator="."
        >{listing.data.timestamp.seconds}</SimpleDateTime>
      </td>
      <td>
        <div className="status-btn-container">
          {tagreender(listing.data.status)}
        </div>
      </td>
      <td>
        <div className="btn-container">
          <div
            className="table-btn table-btn--delete"
            onClick={() => onDelete()}
          >
          </div>
        </div>
      </td>
    </tr>
  )
}

export default CardItemInvite;