import getExp from 'pages/catalog/js/getExp';
import getBirth from 'pages/catalog/js/getBirth';
import { declinationYear, declinationMOnth } from 'pages/catalog/js/declination';



const InfoExp = ({ listing }) => {

  const lastWork = listing.companyWorkComplex && listing.companyWorkComplex[listing.companyWorkComplex.length - 1].namework

  return (
    <>
      {lastWork && (
        <li>
          <span>Опыт работы: </span>
          {getExp(listing)[0] !== 0 && (<b>{getExp(listing)[0]} {declinationYear(getExp(listing)[0])} </b>)}
          {getExp(listing)[1] !== 0 && (<b>{getExp(listing)[1]} {declinationMOnth(getExp(listing)[1])}</b>)}
        </li>
      )}
      {lastWork && (<li><span>Последнее место работы: </span><b>{lastWork}</b></li>)}
      {listing.userInfo.country && <li><span>Гражданство: </span><b>{listing.userInfo.country}</b></li>}
      {listing.userInfo.age && <li><span>Возраст:  </span><b>{getBirth(listing.userInfo.age)}</b></li>}
    </>
  )
}

export default InfoExp
