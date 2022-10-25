import { Link } from 'react-router-dom';

import phoneIco from 'front-end/images/icons/phone-green.svg';
import mainIco from 'front-end/images/icons/mail-green.svg';
import markerIco from 'front-end/images/icons/marker-green.svg';

import SimpleDateTime from 'react-simple-timestamp-to-date';
import InfoExp from 'pages/catalog/parts/cardsItem/InfoExp';

const CardsMain = ({ listing, imgCards, elementId, refContent }) => {

  const address = listing.coords && listing.coords.split('--');

  return (
    <>
      <div className="cards-main shadow-container" ref={refContent}>
        <div className="cards-item-roof">
          <span>Резюме обновлено:&nbsp;
            <SimpleDateTime
              format="MYD"
              showTime="0"
              dateSeparator="."
            >{listing.timestamp.seconds}</SimpleDateTime></span>
        </div>
        <div className="main-grid">
          <div className="col-2 col-md-3 col-sm-4 col-xs-12" >
            <div className="cards-face-container">
              <div
                className="cards-face img-cover"
                style={{ backgroundImage: `url(${imgCards})` }}
              >
              </div>
            </div>
          </div>
          <div className="col-6 col-xxl-5 col-md-9 col-sm-8 col-xs-12 cards-item-info-container">
            <div className="cards-item-info" >
              <div className="cards-item-info-top">
                <h3>{listing.card_name}</h3>

                {listing.salary_price && (
                  <div className="cards-item-price">
                    <b>P {listing.salary_price}</b>
                    <span>{listing.salary_worktime}</span>
                  </div>
                )}
              </div>
              <ul className="cards-item-bottom ln">
                <InfoExp listing={listing} />
              </ul>
            </div>
            <div className="cards-item-delimetr"></div>
          </div>
          <div className="cards-pay-offset col-md-3 col-sm-4 col-xs-12">
            <div className="cards-mobile-controls">
              <div className="sidebar-btn">
                <span>В избранное</span>
                {/* <img src="/images/icons/star-white.svg" alt="" /> */}
              </div>
              <div className="sidebar-btn"><span>Спрятать</span>
                {/* <img src="/images/icons/hide-view-white.svg" alt="" /> */}
              </div>
              <div className="sidebar-btn"><span>Скачать</span>
                {/* <img src="/images/icons/download-white.svg" alt="" /> */}
              </div>
              <div className="sidebar-btn"><span>Распечатать</span>
                {/* <img src="/images/icons/print-white.svg" alt="" /> */}
              </div>
            </div>
          </div>
          <div className="col-4 col-xxl-5 col-md-9 col-sm-8 col-xs-12 cards-pay-container" >
            <div className="cards-item-info cards-item-pay-info">
              {listing.userInfo.fio && (<h3>{listing.userInfo.fio}</h3>)}
              <ul className="ln cards-item-info-list">
                {listing.userInfo.phone && (
                  <li>
                    <img src={phoneIco} alt="" />
                    <Link to={`tel:${listing.userInfo.phone}`}>
                      {listing.userInfo.phone}
                    </Link>
                  </li>
                )}
                {listing.userInfo.email && (
                  <li>
                    <img src={mainIco} alt="" />
                    <Link to={`mailto:${listing.userInfo.email}`}>{listing.userInfo.email}</Link>
                  </li>
                )}

                {address && (<li>
                  <img src={markerIco} alt="" />
                  <span>Адрес: </span>
                  <b>{address[0]}</b>
                </li>)}
              </ul>
              <div className="cards-item-bottom btn-container">
                {address && (
                  <Link to={`/map/${elementId}`} className="btn btn--green-border ico-in ico-in--left btn-show-map">
                    <i></i>
                    <span>Показать на карте</span>
                  </Link>
                )}

                <div className="btn btn--green-border btn-mobile">Видеочат</div>
                <div className="btn btn--green-border btn-mobile">Чат</div>
                <div className="btn btn--green-border btn-mobile">Откликнуться</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardsMain
