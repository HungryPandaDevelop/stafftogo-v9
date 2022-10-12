import { useState } from 'react';
import Switch from 'blocks/cardsControls/parts/Switch'; //  почему тут ?
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ActionFn from 'store/actions';

const Search = ({ ActionFn }) => {

  const [headSearch, setHeadSearch] = useState('');
  const [showBtnEmpty, setShowBtnEmpty] = useState(false);

  const onHeadSearch = (e) => {
    setHeadSearch(e.target.value);
    if (e.target.value.length > 1) {
      setShowBtnEmpty(true);
    } else {
      setShowBtnEmpty(false);
    }
  }
  const onEmptySearch = () => {
    setHeadSearch('');
    setShowBtnEmpty(false);
  };
  const onSearch = (e) => {
    ActionFn('SEARCH_NAME_LISTING', headSearch);
  }

  return (
    <div className="vertical-align col-6 col-lg-7 col-md-9 col-sm-3">
      <div className="btn-header-loop"></div>
      <div className="search-header">
        <div className="search-container">
          <Switch />
          <div className="input-container">
            <input
              className="input-decorate"
              type="text"
              value={headSearch}
              placeholder="Профессия, должность или компания"
              onChange={(e) => { onHeadSearch(e) }}
            />
            {showBtnEmpty && <div
              className="search-reset-btn"
              onClick={onEmptySearch}
            ></div>}
          </div>
          <Link to='/catalog/' className="btn btn--orange" onClick={onSearch}>Поиск</Link>
        </div>
        <Link className="btn-map-head" to="/map"></Link>
      </div></div>
  )
}

export default connect(null,
  {
    ActionFn
  })(Search);