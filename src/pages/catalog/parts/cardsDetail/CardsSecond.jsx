import Additional from 'pages/catalog/parts/cardsDetail/Additional';
import Wetake from 'pages/catalog/parts/cardsDetail/Wetake';
import TypeWorkResume from 'pages/catalog/parts/cardsDetail/TypeWorkResume';
import TypeWorkVacancies from 'pages/catalog/parts/cardsDetail/TypeWorkVacancies';



const CardsSecond = ({ listing }) => {



  return (
    <>
      <div className="cards-second-info main-grid">

        <div className="col-7 col-md-12">
          {listing.extraWorkType && <TypeWorkVacancies list={listing.extraWorkType} />}

          {listing.typeWork && <TypeWorkResume list={listing.typeWork} />}
        </div>
        <div className="col-5 col-md-12">
          {listing.additional && <Additional list={listing.additional} />}

          {listing.wetake && <Wetake list={listing.wetake} />}
        </div>
      </div>
    </>
  )
}

export default CardsSecond
