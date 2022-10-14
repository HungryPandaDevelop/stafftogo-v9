import { Link } from 'react-router-dom';

import BtnLike from 'pages/catalog/parts/cardsItem/BtnLike';
import BtnInvite from 'pages/catalog/parts/cardsItem/BtnInvite';
import BtnCall from 'pages/catalog/parts/cardsItem/BtnCall';

import phoneIco from 'front-end/images/icons/phone-gren.svg'
import mainIco from 'front-end/images/icons/mail-gren.svg'
import markerIco from 'front-end/images/icons/marker-gren.svg'

import SimpleDateTime from 'react-simple-timestamp-to-date';

import defaultCardsImg from 'front-end/images/icons/avatar-light-gray.svg'

const ListItem = (props) => {
  const {
    listing,
    link,
    listingType,
    cabinetType,
    uid,
    invited,
    currentCard,
    accountInfo
  } = props;


  const listingData = listing.data;


  const imgCards = listingData.userInfo.imgsAccount ? listingData.userInfo.imgsAccount : defaultCardsImg;

  return (
    <div className="cards-item shadow-container">
      <div className="main-grid cards-item-roof">
        <div className="col-6">
          <span>Резюме обновлено:&nbsp;
            <SimpleDateTime
              format="MYD"
              showTime="0"
              dateSeparator="."
            >{listingData.timestamp.seconds}</SimpleDateTime></span>
        </div>
        <div className="col-6 cards-like">
          {(uid && listingType != cabinetType) && (
            <BtnLike
              listing={listing}
            />
          )}

        </div>
      </div>
      <div className="main-grid">
        <div className="col-2 col-md-3 col-sm-4 col-xs-12">
          <div
            className="cards-face-container"
          >
            <div
              className="cards-face img-cover"
              style={{ backgroundImage: `url(${imgCards})` }}
            >
            </div>
            <BtnCall listing={listing.data} />

          </div>
        </div>
        <div className="col-6 col-xxl-5 col-md-9 col-sm-8 col-xs-12 cards-item-info-container">
          <div className="cards-item-info">
            <div className="cards-item-info-top">
              <h3>
                <Link to={link}>
                  {listingData.card_name}
                </Link>
              </h3>
              <div className="cards-item-price">
                {listingData.salary_priceFrom && `Р ${listingData.salary_priceFrom}`}
              </div>
            </div>

            <div className="cards-item-bottom">
              <ul className="ln">
                <li>
                  <span>Опыт работы </span>
                  <b>3 года 3 месяца X</b>
                </li>
                <li>
                  <span>
                    Последнее место работы
                  </span>
                  <b>Старший повар, Повар горячего цеха X</b>
                </li>
              </ul>
            </div>
          </div>
          <div className="cards-item-delimetr"></div>
        </div>

        <div className="cards-pay-offset col-md-3 col-sm-4">

        </div>
        <div className="col-4 col-xxl-5 col-md-9 col-sm-8 col-xs-12 cards-pay-container">
          <div className="cards-item-info cards-item-pay-info">
            <h3>{listingData.userInfo.name_company} ?</h3>
            <ul className="ln cards-item-info-list">
              {listingData.userInfo.phone && (
                <li>
                  <img src={phoneIco} alt="" />
                  <Link to={`tel:${listingData.userInfo.phone}`}>
                    {listingData.userInfo.phone}
                  </Link>
                </li>
              )}
              {listingData.userInfo.email && (
                <li>
                  <img src={mainIco} alt="" />
                  <Link to={`mailto:${listingData.userInfo.email}`}>{listingData.userInfo.email}</Link>
                </li>
              )}

              <li>
                <img src={markerIco} alt="" />
                <span>Адрес: </span>
                <b>Окская улица, 48/2, Москва, ?</b>
              </li>
            </ul>
            <div class="cards-item-bottom btn-container">
              {(uid && listingType != cabinetType) && (
                <BtnInvite
                  listing={listing}
                  invited={invited}
                  uid={uid}
                  currentCard={currentCard}
                  accountInfo={accountInfo}
                />
              )}

              <div class="btn btn--gren-border ico-in ico-in--left btn-show-map">
                <i></i>
                <span>Показать на карте</span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}



export default ListItem;