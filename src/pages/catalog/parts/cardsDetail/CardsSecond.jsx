import Additional from 'pages/catalog/parts/cardsDetail/Additional';

import dayWork from 'front-end/images/icons/day-work.svg';
import quicklyWork from 'front-end/images/icons/quickly-work.svg';
import nightWork from 'front-end/images/icons/night-work.svg';
import projectWork from 'front-end/images/icons/project-work.svg';



const CardsSecond = ({ listing }) => {
  return (
    <>
      <div className="cards-second-info main-grid">
        <div className="col-7 col-md-12">

          <div className="cards-typework-item shadow-container">
            <div className="cards-typework-img">
              <img src={dayWork} alt="" />
            </div>
            <div className="cards-typework-info"><em>Полная занятость</em><span>В месяц</span><b>Р 155 000 - 180 000</b></div>
          </div>
          <div className="cards-typework-item shadow-container">
            <div className="cards-typework-img">
              <img src={quicklyWork} alt="" />
            </div>
            <div className="cards-typework-info"><em>Срочный выезд</em><span></span><b>Р 3 000</b></div>
          </div>
          <div className="cards-typework-item shadow-container">
            <div className="cards-typework-img">
              <img src={nightWork} alt="" />
            </div>
            <div className="cards-typework-info"><em>Работа ночью</em><span>В месяц</span><b>Р 5 500</b></div>
          </div>
          <div className="cards-typework-item shadow-container">
            <div className="cards-typework-img">
              <img src={projectWork} alt="" />
            </div>
            <div className="cards-typework-info"><em>Проектная работа</em><span></span><b>Р 5 500</b></div></div>

        </div>
        <div className="col-5 col-md-12">
          {listing.additional && <Additional list={listing.additional} />}
        </div>
      </div>
    </>
  )
}

export default CardsSecond
