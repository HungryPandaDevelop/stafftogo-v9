
import { useState } from 'react';
import RightBtnContainer from "blocks/filters/parts/RightBtnContainer";


import { connect } from 'react-redux';

import LeftBtnContainer from "blocks/filters/parts/LeftBtnContainer";

const CardsControls = ({ listingSearch }) => {

  const [stateFilter, setStateFilter] = useState(false);

  const onShowFilter = () => {
    setStateFilter(!stateFilter);
  }

  const industry = listingSearch.industry;
  const specialization = listingSearch.specialization;



  return (
    <>
      <div className="find-container-mobile main-full">
        <div className="btn-find btn btn--orange ico-in ico-in--right" onClick={onShowFilter}>
          <span>Поиск</span>
          <i></i>
        </div>
      </div>
      <div className={`filters ${stateFilter && 'mobile-show'}`} >
        <div className="filters-close-mobile" onClick={onShowFilter}></div>
        <div className="main-full filters-container">
          <div className="btn-container--left">
            <LeftBtnContainer
              industry={industry}
              specialization={specialization}
            />
          </div>
          <div className="btn-container--right">
            <RightBtnContainer />
          </div>
        </div>
      </div>


    </>
  )
}


const mapStateToProps = (state) => {
  return {
    listingSearch: state.listingSearchReducer
  }
}

export default connect(mapStateToProps)(CardsControls);