import MapYandex from "pages/goMap/parts/MapYandex";
import Filters from 'blocks/filters/Filters';

const GoMap = () => {
  return (
    <>
      <div className="stub"></div>
      <Filters />
      <div className="map">
        <MapYandex />
      </div>
    </>

  )
}

export default GoMap;
