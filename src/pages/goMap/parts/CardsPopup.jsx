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
import BtnLike from 'pages/catalog/parts/cardsItem/BtnLike';
import BtnInvite from 'pages/catalog/parts/cardsDetail/BtnInvite';
import phoneIco from 'front-end/images/icons/phone-green.svg'
import mainIco from 'front-end/images/icons/mail-green.svg'
import markerIco from 'front-end/images/icons/marker-green.svg'





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
    routeboxState,
    navigate,
    uid,
    cabinetType,
    setMarkerPositionText,
    setChoiseMarkerPosition
  }) => {

  const [cardInfo, setCardInfo] = useState(null);




  const onShowPopup = (id) => {
    // console.log('myMapRef', myMapRef.current)
    if (id && myMapRef.current) {
      getSingleListing(listingType, id).then(res => {
        setCardInfo(res);
        removeRoute(myMapRef, myRoute);

        const coords = res.coords.split('--');
        setMarkerPositionText(coords[0])
        const ltd = Number(coords[1]);
        const lng = Number(coords[2]);
        setChoiseMarkerPosition([ltd, lng]);
        myMapRef.current.setCenter([ltd, lng], 15)
        setRouteboxState(true);
      });
    }
  }

  const closePopup = () => {
    setCardInfo(null);
    setRouteboxState(null);
    setCurrentCardId(null);
    removeRoute(myMapRef, myRoute);
    navigate('/catalog/' + listingType + '/map');
    // console.log('/catalog/' + listingType + '/map')
  }

  const showRoutebox = () => {
    // console.log('myPosition', myPosition)
    if (myPosition) {
      removeRoute(myMapRef, myRoute);
      addRoute(myMap, myMapRef, setMyRoute, myPosition, choiseMarkerPosition, 'auto');
      console.log('map', myPosition, choiseMarkerPosition)
      // setRouteboxState(!routeboxState); // состояние плашки маршрту
      // setRouteFirst(); // построить маршрут
    }

  }



  useEffect(() => {

    onShowPopup(currentCardId);

  }, [currentCardId])




  const rednderCards = () => {

    const imgCards = cardInfo.userInfo.imgsAccount ? cardInfo.userInfo.imgsAccount : defaultCardsImg;
    const address = cardInfo.coords && cardInfo.coords.split('--');
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
            {(uid && listingType != cabinetType) && (
              <BtnLike
                listing={cardInfo}
                elementIdDetail={currentCardId}
                locationBtn='map'
              />
            )}

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
            <h3> <Link to={`/catalog/${listingType}/${currentCardId}`}>{cardInfo.card_name}</Link></h3>
            {cardInfo.userInfo.accountName && (<h4>{cardInfo.userInfo.accountName}</h4>)}
            <div className="gomap-popup-price">{cardInfo.salary_priceFrom}</div>
            <ul className="ln gomap-popup-list">
              {cardInfo.userInfo.phone && (
                <li>
                  <img src={phoneIco} alt="" />
                  <a href={`tel:${cardInfo.userInfo.phone}`}>
                    {cardInfo.userInfo.phone}
                  </a>
                </li>
              )}
              {cardInfo.userInfo.email && (
                <li>
                  <img src={mainIco} alt="" />
                  <a href={`mailto:${cardInfo.userInfo.email}`}>{cardInfo.userInfo.email}</a>
                </li>
              )}

              <li>
                <img src={markerIco} alt="" />
                <span>Адрес: </span>

                <b>{address[0]}</b>
              </li>
            </ul>
            {(uid && listingType != cabinetType) && (
              <BtnInvite
                listing={cardInfo}
                elementId={currentCardId}
              />
            )}
          </div>
        </div>
        <div
          className="btn btn--white btn-show-map ico-in--right"
          onClick={showRoutebox}>
          <span>Маршрут</span><i></i>
        </div>
      </div >
    )
  }
  if (cardInfo) {
    return rednderCards();
  }
  else {
    return false;
  }

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