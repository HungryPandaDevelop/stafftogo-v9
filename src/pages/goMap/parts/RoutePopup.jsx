import { useState, useEffect, useRef } from "react"

import addRoute from 'pages/goMap/js/addRoute';
import removeRoute from 'pages/goMap/js/removeRoute';

const RoutePopup = (
  {
    myMap,
    myMapRef,
    myRoute,
    setMyRoute,
    currentCardId,
    myPosition,
    choiseMarkerPosition,
    myPositionText,
    markerPositionText,
    routeboxState,
    setRouteboxState,
    onSetMyPosition,
    setMyPosition
  }) => {

  // console.log('markerPositionText', markerPositionText)

  const routeChecknox = ['auto', 'masstransit', 'pedestrian'];
  const routeChecknoxTemp = ['car', 'bus', 'walk']; // ПОСЛЕ ВЕРСТКИ ПОМЕНЯТЬ
  const [routeCheckboxType, setRouteCheckboxType] = useState(0)


  const elRef = useRef();
  const originRef = useRef();
  const [custVal, setCustVal] = useState('');
  const [firstLoad, setFirstLoad] = useState(0);


  useEffect(() => {
    routeboxState && (setTimeout(() => {
      const { ymaps } = window;
      console.log('window', ymaps);


      const suggest = new ymaps.SuggestView('suggest')
      // console.log(suggest)

      suggest.events.add('select', (e) => {

        const val = String(e.get('item').value.trim());

        const myGeocoder = ymaps.geocode(val);

        myGeocoder
          .then(res => {
            // console.log('myMap', myMap)
            onSetMyPosition(res.geoObjects.get(0).geometry._coordinates)

            // console.log('val', res.geoObjects.get(0).geometry._coordinates)
            // setCustVal(val + "--" + res.geoObjects.get(0).geometry._coordinates[0] + "--" + res.geoObjects.get(0).geometry._coordinates[1]);
            // elRef.current.focus();

          })
      });
    }, 1000))


  }, [routeboxState]);

  // const checkEpmty = (e) => {

  //   if (e.target.value.length === 0) {
  //     console.log('set empty');
  //     setCustVal('');
  //     elRef.current.focus();
  //   }
  // }

  const showRoutebox = () => {
    console.log('set route', myRoute);
    removeRoute(myMapRef, myRoute);
    addRoute(myMap, myMapRef, setMyRoute, myPosition, choiseMarkerPosition, 'auto');

    setRouteboxState(!routeboxState); // состояние плашки маршрту
    // setRouteFirst(); // построить маршрут
  }


  const changeInTypeRoute = (index) => {
    // тип маршрута

    removeRoute(myMapRef, myRoute);
    setRouteCheckboxType(index);
    addRoute(myMap, myMapRef, setMyRoute, myPosition, choiseMarkerPosition, routeChecknox[index]);
  }


  return (
    <div className="gomap-route-conainer">
      {routeboxState && (
        <div className="gomap-route shadow-container">
          <div className="from input-route-item">
            <i className="from-ico"></i><span>Откуда: </span>
            {/* <input className="input-decorate" type="text" value={myPositionText} /> */}
            <input
              // ref={originRef}
              id="suggest"
              type="text"
              className="input-decorate"
              // onChange={checkEpmty}
              autoсomplete="off"
            />
          </div>
          <div className="to input-route-item">
            <i className="to-ico"></i><span>Куда: </span>
            <input className="input-decorate" type="text" value={markerPositionText} disabled />
          </div>

          <div className="checkbox-route">
            {routeChecknox.map((item, index) => (
              <div
                key={index}
                className={`checkbox-route-item checkbox-route-${routeChecknoxTemp[index]}`}
                onClick={() => { changeInTypeRoute(index); }}
              >
                <i className={`${routeChecknoxTemp[index]}-ico`}></i>
                <hr />
                <span className={index === routeCheckboxType ? "checkbox-route--active" : "checkbox-route"}></span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default RoutePopup;



