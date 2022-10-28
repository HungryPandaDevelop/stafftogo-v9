import { Link } from 'react-router-dom';
import { saveInfo } from 'store/asyncActions/saveInfo';



const CardItemHidden = ({
  hide,
  reverseTypeCabinet,
  accountInfo,
  ActionFn,

}) => {


  const onDeleteLike = (idElement) => {

    const filterLike = accountInfo.hideMass.filter(item => item !== idElement);
    const sendData = { hideMass: filterLike };
    console.log(sendData)
    saveInfo(sendData, accountInfo.uid, 'users').then(() => {
      ActionFn('SET_INFO_ACCOUNT', { ...accountInfo, hideMass: sendData.hideMass });
    });

    // currentLike.current.remove()

  }


  return (
    <>
      <td>
        <div className="cards-cabinet-item main-full">
          <div className="cards-account-topic">
            <Link to={`/catalog/${reverseTypeCabinet}/${hide.id}`}>{hide.data.card_name}</Link>
          </div>
        </div>
      </td>
      <td>
        <div className="btn-container">
          <div onClick={() => { onDeleteLike(hide.id) }} className="table-btn table-btn--delete"></div>
        </div>
      </td>
    </>
  )
}

export default CardItemHidden;

