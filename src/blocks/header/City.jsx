import { connect } from 'react-redux';
import { useState, useEffect, useRef } from 'react';


const City = ({ russianCities }) => {

  const [useChoiseName, setUseChoiseName] = useState('Москва')
  const [russianCitiesList, setRussianCities] = useState(russianCities);
  const [cityPopupState, setCityPopupState] = useState(false);

  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {

    localStorage.getItem('choisenCity') && setUseChoiseName(localStorage.getItem('choisenCity'))
    setRussianCities(russianCities);

    const hideByBody = (e) => {
      if (e.target.className !== 'city-header-input') {
        setCityPopupState(false)
      }
      if (e.key === 'Escape') { setCityPopupState(false); }
    }
    document.addEventListener('keydown', hideByBody);
    document.body.addEventListener('click', hideByBody);
    return () => {
      document.body.removeEventListener('click', hideByBody)
      document.body.removeEventListener('keydown', hideByBody)
    };
  }, []);

  const choiseCity = (e) => {
    setUseChoiseName(e.currentTarget.getAttribute('namecity'));
    localStorage.setItem('choisenCity', e.currentTarget.getAttribute('namecity'));
    setCityPopupState(false);
  }
  const onSearchCity = (e) => {

    setUseChoiseName(e.target.value);

    const dataSearch = russianCities.filter(item => (item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0));

    setRussianCities(dataSearch)

  }

  const renderCityList = (russianCitiesListParam) => {

    return (russianCitiesListParam.length > 0) ? russianCitiesListParam.map((item, index) => (
      <li
        key={index}
        ltd={item.coords.lat}
        lng={item.coords.lon}
        namecity={item.name}
        onClick={choiseCity}

      >
        {item.name}</li>
    )) : (<li>Список пуст</li>);
  }


  // const forgetMe = () => {
  //   console.log('forgetMe me')
  //   localStorage.removeItem('rememberMe');
  // }
  return (
    <>
      <div className="vertical-align col-2 hidden-lg hidden-md hidden-sm hidden-xs">

        <div className="city-header"><em></em>
          <input
            ref={inputRef}
            type="text"
            value={useChoiseName}
            className="city-header-input"
            onChange={onSearchCity}
            // onBlur={() => setCityPopupState(false)}
            onFocus={(event) => { setCityPopupState(true); event.target.select() }}
          />
          {cityPopupState && (
            <div
              className="city-header-popup"
              ref={wrapperRef}
            >
              <ul className="ln">
                {renderCityList(russianCitiesList)}
              </ul>
            </div>
          )}
        </div>
      </div>


    </>

  )
}


const mapStateToProps = (state) => {
  // console.log(state)
  return {
    russianCities: state.russianCities
  }
}

export default connect(mapStateToProps)(City);