import getExp from 'pages/catalog/js/getExp';
import { declinationYear, declinationMOnth } from 'pages/catalog/js/declination';

const ExpWorkSingle = ({ listing }) => {

  const lastWork = listing.companyWorkComplex && listing.companyWorkComplex[listing.companyWorkComplex.length - 1].namework


  return (
    <>
      {lastWork && (
        <>
          <span>Опыт работы: </span>
          {getExp(listing)[0] !== 0 && (<b>{getExp(listing)[0]} {declinationYear(getExp(listing)[0])} </b>)}
          {getExp(listing)[1] !== 0 && (<b>{getExp(listing)[1]} {declinationMOnth(getExp(listing)[1])}</b>)}
        </>
      )}
    </>
  )
}

export default ExpWorkSingle;
