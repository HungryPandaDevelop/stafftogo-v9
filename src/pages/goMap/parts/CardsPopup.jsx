import { connect } from 'react-redux';
import ActionFn from 'store/actions';
import { Link } from 'react-router-dom';

import addRoute from 'pages/goMap/js/addRoute';
import removeRoute from 'pages/goMap/js/removeRoute';

import { useEffect, useState } from 'react';

import { getSingleListing } from 'store/asyncActions/getSingleListing'
import SimpleDateTime from 'react-simple-timestamp-to-date';

import defaultCardsImg from 'front-end/images/icons/avatar-light-gray.svg'
import BtnCall from 'pages/catalog/parts/cardsItem/BtnCall';

import phoneIco from 'front-end/images/icons/phone-gren.svg'
import mainIco from 'front-end/images/icons/mail-gren.svg'
import markerIco from 'front-end/images/icons/marker-gren.svg'





const CardsPopup = (
  {
    listingType,
    currentCardId,
    myMap,
    myMapRef,
    myRoute,
    setMyRoute,
    setRouteboxState,
    setCurrentCardId,
    myPosition,
    choiseMarkerPosition,
    routeboxState
  }) => {

  const [cardInfo, setCardInfo] = useState(null);

  useEffect(() => {
    if (currentCardId) {
      getSingleListing(listingType, currentCardId).then(res => {
        setCardInfo(res);
        removeRoute(myMapRef, myRoute);
        // console.log(res)
      });
    }
  }, [currentCardId])

  const closePopup = () => {
    setCardInfo(null);
    setRouteboxState(null);
    setCurrentCardId(null);
    removeRoute(myMapRef, myRoute);
  }
  console.log('cardInfo', cardInfo)

  const showRoutebox = () => {
    console.log('set route', myRoute);
    removeRoute(myMapRef, myRoute);
    addRoute(myMap, myMapRef, setMyRoute, myPosition, choiseMarkerPosition, 'auto');

    setRouteboxState(!routeboxState); // состояние плашки маршрту
    // setRouteFirst(); // построить маршрут
  }

  const rednderCards = () => {

    const imgCards = cardInfo.userInfo.imgsAccount ? cardInfo.userInfo.imgsAccount : defaultCardsImg;
    console.log(imgCards)
    return (
      <div
        className="gomap-popup-container"
      >
        <div className="gomap-popup shadow-container">
          <div className="gomap-popup-close filters-close-popup"
            onClick={closePopup}
          >
          </div>
          <div className="gomap-popup-roof">
            <span>Резюме обновлено:&nbsp;
              <SimpleDateTime
                format="MYD"
                showTime="0"
                dateSeparator="."
              >{cardInfo.timestamp.seconds}</SimpleDateTime></span>
            <div className="like-btn">
              <div className="like-hint">Добавить в избранное</div>
            </div>
          </div>
          <div className="cards-face-container" >
            <div
              className="cards-face img-cover"
              style={{ backgroundImage: `url(${imgCards})` }}
            >
            </div>
            <BtnCall listing={cardInfo} />
          </div>
          <div className="gomap-popup-info">
            <h3> <a href="/">{cardInfo.card_name}</a></h3>
            {cardInfo.userInfo.fio && (<h4>{cardInfo.userInfo.fio}</h4>)}
            <div className="gomap-popup-price">{cardInfo.salary_priceFrom}</div>
            <ul className="ln gomap-popup-list">
              {cardInfo.userInfo.phone && (
                <li>
                  <img src={phoneIco} alt="" />
                  <Link to={`tel:${cardInfo.userInfo.phone}`}>
                    {cardInfo.userInfo.phone}
                  </Link>
                </li>
              )}
              {cardInfo.userInfo.email && (
                <li>
                  <img src={mainIco} alt="" />
                  <Link to={`mailto:${cardInfo.userInfo.email}`}>{cardInfo.userInfo.email}</Link>
                </li>
              )}

              <li>
                <img src={markerIco} alt="" />
                <span>Адрес: </span>
                <b>Окская улица, 48/2, Москва, ?</b>
              </li>
            </ul>
            <div className="btn btn--gren-border">Откликнуться</div>
          </div>
        </div>
        <div className="btn btn--white btn-show-map ico-in--right" onClick={showRoutebox}><span>Маршрут</span><i></i></div>
      </div >
    )
  }

  return cardInfo && rednderCards();
}

const mapStateToProps = (state) => {

  return {
    getInfo: state.popupMapInfoReducer
  }
}


export default connect(mapStateToProps,
  {
    ActionFn
  })(CardsPopup);