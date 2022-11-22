import { YMaps, Map, ZoomControl } from 'react-yandex-maps';
import { useState, useEffect } from 'react';
const ClearYaMap = ({ myMap, myMapRef, setMyMap, setLoadMap }) => {

  const [centerCoords, setCenterCoords] = useState('');
  useEffect(() => {


    let arr = localStorage.getItem('choisenCoordsCity').split(',');
    setCenterCoords(arr)
    console.log(arr)
  }, []);
  return (
    <>
      <YMaps
        query={{ apikey: 'fdb17d90-1d93-4d15-aa02-45c372d5e0f8' }}

      >
        <Map
          id="map"
          width="100%"
          height="100%"
          defaultState={
            {
              center: centerCoords,
              zoom: 9
            }
          }
          modules={["multiRouter.MultiRoute", "Placemark", "geocode"]}
          onLoad={(y) => {
            // myMap.current = y;
            setMyMap(y)
            setLoadMap(true)
            // console.log('ready', y);
          }}
          instanceRef={myMapRef}
        >

          <ZoomControl />
        </Map>
      </YMaps>
    </>
  )
}

export default ClearYaMap
