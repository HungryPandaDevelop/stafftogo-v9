import { connect } from 'react-redux';
import { useState, useEffect, useRef } from 'react';


const City = ({ russianCities }) => {

  const [сhoiseName, setСhoiseName] = useState('Москва');
  const [сhoiseNameFiltering, setСhoiseNameFiltering] = useState('');
  const [russianCitiesList, setRussianCities] = useState(russianCities);
  const [cityPopupState, setCityPopupState] = useState(false);

  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {

    localStorage.getItem('choisenCity') && setСhoiseName(localStorage.getItem('choisenCity'))
    // console.log(localStorage.getItem('choisenCoordsCity'))
    setRussianCities(russianCities);

    const hideByBodyClick = (e) => {
      if (e.target.className !== 'city-input' && e.target.className !== 'city-name') {
        setCityPopupState(false)
      }

    }
    const hideByBodyByKey = (e) => {
      if (e.key === 'Escape') { setCityPopupState(false); }
    }
    document.addEventListener('keydown', hideByBodyByKey);
    document.body.addEventListener('click', hideByBodyClick);
    return () => {
      document.body.removeEventListener('click', hideByBodyByKey)
      document.body.removeEventListener('keydown', hideByBodyClick)
    };
  }, []);

  const choiseCity = (e) => {
    setСhoiseName(e.currentTarget.getAttribute('namecity'));
    setСhoiseNameFiltering('');
    setRussianCities(russianCities);
    localStorage.setItem('choisenCity', e.currentTarget.getAttribute('namecity'));
    localStorage.setItem('choisenCoordsCity', e.currentTarget.getAttribute('coords'));
    // console.log(Number(e.currentTarget.getAttribute('ltd')))
    setCityPopupState(false);
  }
  const onSearchCity = (e) => {

    setСhoiseNameFiltering(e.target.value);

    const dataSearch = russianCities.filter(item => (item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0));

    setRussianCities(dataSearch)

  }

  const renderCityList = (russianCitiesListParam) => {

    return (russianCitiesListParam.length > 0) ? russianCitiesListParam.map((item, index) => (
      <li
        key={index}
        coords={[item.coords.lat, item.coords.lon]}
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

        <div className="city-header">
          <em></em>
          <div
            className="city-name"
            onClick={() => { setCityPopupState(true) }}
          >{сhoiseName}</div>


          {cityPopupState && (
            <div
              className="city-header-popup"
              ref={wrapperRef}
            >
              <div className="filters-close-popup" onClick={() => { setCityPopupState(false) }}></div>
              <div className="city-search-container">
                <i></i>

                <input
                  ref={inputRef}
                  type="text"
                  value={сhoiseNameFiltering}
                  className="city-input"
                  onChange={onSearchCity}
                  // onBlur={() => setCityPopupState(false)}
                  placeholder="Введите название города"
                  onFocus={(event) => { setCityPopupState(true); event.target.select() }}
                />
              </div>

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