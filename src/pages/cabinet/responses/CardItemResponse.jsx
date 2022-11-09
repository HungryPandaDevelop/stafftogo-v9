import { useState } from 'react';
import { Link } from 'react-router-dom';

import { saveInfo } from 'store/asyncActions/saveInfo';



import SimpleDateTime from 'react-simple-timestamp-to-date';

const CardItemResponse = ({ listing, typeCabinet, onDelete }) => {

  const reverseTypeCabinet = (typeCabinet === 'vacancies') ? 'resume' : 'vacancies';
  const getTypeCabinetText = (cabinet) => { if (cabinet === 'vacancies') { return 'вакансию' } else { return 'резюме' }; };
  const [status, setChangeStatus] = useState(listing.data.status);



  const onChangeStatus = (statusParam) => {
    if (status !== statusParam) {
      saveInfo({ 'status': statusParam }, listing.id, 'message').then(() => {
        setChangeStatus(statusParam);
      });
    }
  }

  const tagreender = (tags) => {
    return tags.map((el, index) => (
      <div key={index}
        className={`status-btn status-btn--${el[0]} ${status === el[0] ? 'active' : ''}`}
        onClick={() => onChangeStatus(el[0])}
      >{el[1]}
      </div>
    ))
  }



  return (
    <tr>
      <td>
        Вас пригласили на
        <div className="cards-account-topic">
          {getTypeCabinetText(reverseTypeCabinet)}  <Link to={`/catalog/${reverseTypeCabinet}/${listing.data.owmListingId}`}>{listing.data.ownInvitedName}</Link>
        </div>
        По резюме {listing.data.hisInvitingName}
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
          {tagreender([['roger', 'Согласен'], ['turnoff', 'Отказать'], ['considered', 'Рассматривается']])}
        </div>
      </td>
      <td>
        <div className="btn-container">
          <div
            className="table-btn table-btn--delete"
            onClick={onDelete}
          >
          </div>
        </div>
      </td>
    </tr>
  )
}

export default CardItemResponse;