import { Link } from 'react-router-dom';

import BtnLike from 'pages/catalog/parts/cardsItem/BtnLike';
import BtnInvite from 'pages/catalog/parts/cardsItem/BtnInvite';
import BtnCall from 'pages/catalog/parts/cardsItem/BtnCall';

import phoneIco from 'front-end/images/icons/phone-green.svg'
import mainIco from 'front-end/images/icons/mail-green.svg'
import markerIco from 'front-end/images/icons/marker-green.svg'

import SimpleDateTime from 'react-simple-timestamp-to-date';

import InfoExp from 'pages/catalog/parts/cardsItem/InfoExp'

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
  } = props;


  const listingData = listing.data;

  // console.log('listingData', listingData)

  const imgCards = listingData.userInfo.imgsAccount ? listingData.userInfo.imgsAccount : defaultCardsImg;
  const address = listingData.coords && listingData.coords.split('--');
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
              locationBtn='catalog'
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
              {listingData.salary_price && (
                <div className="cards-item-price">
                  <b>P {listingData.salary_price}</b>
                  <span>{listingData.salary_worktime}</span>
                </div>
              )}
            </div>

            <ul className="ln cards-item-bottom cards-item-bottom-info">
              <InfoExp listing={listingData} />
            </ul>
          </div>
          <div className="cards-item-delimetr"></div>
        </div>

        <div className="cards-pay-offset col-md-3 col-sm-4">

        </div>
        <div className="col-4 col-xxl-5 col-md-9 col-sm-8 col-xs-12 cards-pay-container">
          <div className="cards-item-info cards-item-pay-info">
            <h3>{listingData.userInfo.accountName}</h3>
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
              {address && (<li>
                <img src={markerIco} alt="" />
                <span>Адрес: </span>
                <b>{address[0]}</b>
              </li>)}

            </ul>
            <div className="cards-item-bottom btn-container">
              {(uid && listingType != cabinetType) && (
                <BtnInvite
                  listing={listing}
                  invited={invited}
                  uid={uid}
                  currentCard={currentCard}

                />
              )}
              {address && (<Link to={`/map/${listing.id}`} className="btn btn--green-border ico-in ico-in--left btn-show-map">
                <i></i>
                <span>Показать на карте</span>
              </Link>)}

            </div>
          </div>


        </div>
      </div>
    </div>
  )
}



export default ListItem;