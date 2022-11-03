import { Link } from 'react-router-dom';
import { saveInfo } from 'store/asyncActions/saveInfo';



const CardItemLike = ({
  like,
  reverseTypeCabinet,
  accountInfo,
  ActionFn,

}) => {


  const onDeleteLike = (idElement) => {

    const filterLike = accountInfo.likeMass.filter(like => like !== idElement);
    const sendData = { likeMass: filterLike };

    saveInfo(sendData, accountInfo.uid, 'users').then(() => {
      ActionFn('SET_INFO_ACCOUNT', { ...accountInfo, likeMass: sendData.likeMass });
    });

    // currentLike.current.remove()

  }

  console.log('like', like);
  return (
    <>
      <td>
        <div className="cards-cabinet-item main-full">
          <div className="cards-account-topic">
            <Link to={`/cabinet/videochat/videoroom-out/${like.data.userRef}`}>{like.data.card_name}</Link>
          </div>
        </div>
      </td>
      <td>
        <div className="btn-container">
          <Link className='table-btn table-btn--call' to={`/cabinet/videochat/videoroom-out/${like.data.userRef}`}>
            <span>{like.data.userInfo.accountName}</span>
          </Link>
          <div onClick={() => { onDeleteLike(like.id) }} className="table-btn table-btn--delete"></div>
        </div>
      </td>
    </>
  )
}

export default CardItemLike;

