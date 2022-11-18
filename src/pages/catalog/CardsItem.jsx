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

const ListItem = ({
  listing,
  link,
  listingType,
  cabinetType,
  uid,
}) => {

  const listingData = listing.data;

  const imgCards = listingData.userInfo.imgsAccount ? listingData.userInfo.imgsAccount : defaultCardsImg;
  const address = listingData.coords && listingData.coords.split('--');


  const renderDataText = () => {
    return listingType === 'resume' ? 'Резюме обновлено:' : 'Вакансия обновлена:'
  }



  return (
    <div className="cards-item shadow-container">
      <div className="main-grid cards-item-roof">
        <div className="col-6">
          <span>{renderDataText()} &nbsp;
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
            {uid !== listing.data.userInfo.uid && <BtnCall listing={listing.data} />}


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
              {listingData.salary && (
                <div className="cards-item-price">
                  <b>P {listingData.salary.price}</b>
                  {listingData.salary.priceType && <span>\ {listingData.salary.priceType} </span>}
                  {listingData.salary.worktime && <span>\ {listingData.salary.worktime} </span>}
                  {listingData.salary.worktype && <span>\ {listingData.salary.worktype} </span>}
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
                  <a href={`tel:${listingData.userInfo.phone}`}>
                    {listingData.userInfo.phone}
                  </a>
                </li>
              )}
              {listingData.userInfo.email && (
                <li>
                  <img src={mainIco} alt="" />
                  <a href={`mailto:${listingData.userInfo.email}`}>{listingData.userInfo.email}</a>
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
                />
              )}
              {address && (<Link to={`/catalog/${listingType}/map/${listing.id}`} className="btn btn--green-border ico-in ico-in--left btn-show-map">
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