import getExp from 'pages/catalog/js/getExp';


const InfoExp = ({ listing }) => {

  const lastWork = listing.companyWorkComplex && listing.companyWorkComplex[listing.companyWorkComplex.length - 1].namework

  console.log('listing', listing.userInfo)
  return (
    <>
      {lastWork && (
        <li>
          <span>Опыт работы: </span>
          {getExp(listing)[0] !== 0 && (<b>{getExp(listing)[0]} года </b>)}
          {getExp(listing)[1] !== 0 && (<b>{getExp(listing)[1]} месяца</b>)}
        </li>
      )}
      {lastWork && (<li><span>Последнее место работы: </span><b>{lastWork}</b></li>)}
      {listing.userInfo.country && <li><span>Гражданство: </span><b>{listing.userInfo.country}</b></li>}
      {listing.userInfo.age && <li><span>Возраст: </span><b>{listing.userInfo.age}</b></li>}
    </>
  )
}

export default InfoExp
