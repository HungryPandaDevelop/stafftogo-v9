import userMarker from 'front-end/images/icons/marker-black.svg'

const addPlacemark = (myMap, myMapRef, coords, setOptions, itemId) => {
  // console.log(coords);
  let myMarkerOptions = {
    iconLayout: 'default#image',
    iconImageHref: userMarker,
    iconImageSize: [30, 42],
  }
  let itemMarkerOptions = {
    preset: "islands#yellowStretchyIcon",
  }
  let setMarkerStyle = setOptions === 'myMarker' ? myMarkerOptions : itemMarkerOptions;
  // console.log(myMap, myMapRef, coords, setOptions, itemId);

  
  const placemark = new myMap.Placemark(
    coords, 
    {
      itemId: itemId
    
    }
    , {
      ...setMarkerStyle,
        // Отключаем кнопку закрытия балуна.
        balloonCloseButton: false,
    });
    // 
 
    if( setOptions === 'myMarker'){
      return placemark
      //myMapRef.current.geoObjects.remove(placemark);
      // console.log(myPoint.length)

    }else{
      myMapRef.current.geoObjects.add(placemark);
      return placemark;

    }
  
};

export default addPlacemark;